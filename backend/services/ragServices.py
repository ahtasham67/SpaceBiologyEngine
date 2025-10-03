from langchain_core.documents import Document
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import PyPDFLoader,PyMuPDFLoader
from pathlib import Path
import os
import numpy as np
from sentence_transformers import SentenceTransformer
import chromadb
from chromadb.config import Settings
import uuid
from typing import List,Dict,Any,Tuple
from sklearn.metrics.pairwise import cosine_similarity
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
load_dotenv()
gemini_api_key = os.getenv("GEMINI_API_KEY")

llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash",temperature=0.1,max_output_tokens=2048,google_api_key=gemini_api_key)



def process_all_pdfs(pdf_directory):
    """Process all PDF files in a directory"""
    all_documents = []
    pdf_dir = Path(pdf_directory)
    
    # Find all PDF files recursively
    pdf_files = list(pdf_dir.rglob("*.pdf"))
    
    print(f"Found {len(pdf_files)} PDF files to process")
    
    for pdf_file in pdf_files:
        print(f"\nProcessing: {pdf_file.name}")
        try:
            loader = PyPDFLoader(str(pdf_file))
            documents = loader.load()
            
            # Add source information to metadata
            for doc in documents:
                doc.metadata['source_file'] = pdf_file.name
                doc.metadata['file_type'] = 'pdf'
            
            all_documents.extend(documents)
            print(f"  ✓ Loaded {len(documents)} pages")
            
        except Exception as e:
            print(f"  ✗ Error: {e}")
    
    print(f"\nTotal documents loaded: {len(all_documents)}")
    return all_documents


from langchain_text_splitters import RecursiveCharacterTextSplitter
def split_documents(documents,chunk_size=1000,chunk_overlap=200):
    """Split documents into smaller chunks for better RAG performance"""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        length_function=len,
        separators=["\n\n", "\n", " ", ""]
    )
    split_docs = text_splitter.split_documents(documents)
    print(f"Split {len(documents)} documents into {len(split_docs)} chunks")
    
    # Show example of a chunk
    if split_docs:
        print(f"\nExample chunk:")
        print(f"Content: {split_docs[0].page_content[:200]}...")
        print(f"Metadata: {split_docs[0].metadata}")
    else:
        print("No documents to split.")
    
    return split_docs

class EmbeddingManager:
    def __init__(self,model_name: str = 'all-MiniLM-L6-v2'):
        self.model_name = model_name
        self.model = None
        self._load_model()

    def _load_model(self):
        try:
            self.model = SentenceTransformer(self.model_name)
        except Exception as e:
            raise ValueError(f"Error loading model {self.model_name}: {e}")

    def generate_embeddings(self,texts:List[str]) -> np.ndarray:
        if not self.model:
            raise ValueError("Model is not loaded.")
        try:
            embeddings = self.model.encode(texts, convert_to_numpy=True)
            return embeddings
        except Exception as e:
            raise ValueError(f"Error generating embeddings: {e}")


class VectorStore:
    def __init__(self,collection_name:str="documents",persist_directory:str="../data/vector_db"):
        self.collection_name = collection_name
        self.persist_directory = persist_directory
        self.client = None
        self.collection = None
        self._initialize_store()

    def _initialize_store(self):
        try:
            os.makedirs(self.persist_directory,exist_ok=True)
            self.client = chromadb.PersistentClient(path=self.persist_directory)
            self.collection = self.client.get_or_create_collection(
                name=self.collection_name,
                metadata={"description": "pdf embeddings for rag"}
            )
            print(f"Vector store initialized at {self.persist_directory}")
            print(f"Collection '{self.collection_name}' is ready.")
            print(f"Existing Documents in collection: {self.collection.count()}")
        except Exception as e:
            print(f"Error initializing vector store: {e}")
            raise

    def add_documents(self,documents:List[Any],embeddings:np.ndarray):
        if len(documents) != len(embeddings):
            raise ValueError("Number of documents and embeddings must match.")
        print(f"Adding {len(documents)} documents to the vector store...")
        ids = []
        metadatas = []
        documents_text = []
        embeddings_list = []

        for i,(doc,emb) in enumerate(zip(documents,embeddings)):
            doc_id = f"doc_{uuid.uuid4().hex[:8]}_{i}"
            ids.append(doc_id)
            metadata = dict(doc.metadata)
            metadata['doc_index'] = i
            metadata['content_length'] = len(doc.page_content)
            metadatas.append(metadata)
            documents_text.append(doc.page_content)
            embeddings_list.append(emb.tolist())
        try:
            self.collection.add(
                ids=ids,
                metadatas=metadatas,
                documents=documents_text,
                embeddings=embeddings_list
            )
            print(f"Successfully added {len(documents)} documents.")
            print(f"Total Documents in collection: {self.collection.count()}")
        except Exception as e:
            print(f"Error adding documents: {e}")
            raise

         

class RAGRetriever:
    def __init__(self,vectorstore,embeddingmanager):
        self.vectorstore = vectorstore
        self.embeddingmanager = embeddingmanager

    def retrieve(self,query:str,top_k:int = 5, score_threshold:float = 0.0)->List[Dict[str,Any]]:
        qemb = self.embeddingmanager.generate_embeddings([query])[0]
        try:
            results = self.vectorstore.collection.query(
                query_embeddings=[qemb.tolist()],
                n_results=top_k
            )
            retrieved = []
            if results['distances'] and results['distances'][0]:
                documents = results['documents'][0]
                metadatas = results['metadatas'][0]
                distances = results['distances'][0]
                ids = results['ids'][0]
                
                for i,(doc_id,doc,meta,dist) in enumerate(zip(ids,documents,metadatas,distances)):
                    # ChromaDB uses cosine distance, convert to similarity score
                    # For cosine distance: similarity = 1 - distance
                    # But ChromaDB distance values can be > 1, so we need to handle this properly
                    score = max(0, 1 - dist)  # Ensure score is not negative                    
                    if score >= score_threshold:
                        retrieved.append({
                            'id': doc_id,
                            'content': doc,
                            'metadata': meta,
                            'similarity_score': score,
                            'rank': i+1
                        })
                    else:
                        print(f"Doc {i+1} filtered out (score {score:.4f} < threshold {score_threshold})")                        
            else:
                print("No documents retrieved from vector store.")
            return retrieved
        except Exception as e:
            print(f"Error during retrieval: {e}")
            return []
        

def rag_func(query,retriever,llm,top_k=3):
    res = retriever.retrieve(query,top_k=top_k)
    print(f"Top {len(res)} retrieved documents:")
    
    if res:
        # We have retrieved documents
        context = "\n\n".join(doc['content'] for doc in res)
        sources = [{
            'source': doc['metadata'].get('source_file',doc['metadata'].get('source','unknown')),
            'page': doc['metadata'].get('page', 'unknown'),
            'preview': doc['content'][:300]+'...' if doc['content'] else ''
        } for doc in res]        
        # Include context in the prompt
        prompt = f"""You are a space biology expert. Answer the following question based on these sources about space biology and related fields. If you're not certain about something, please indicate that.
        if the sources are not relevant, use your general knowledge to answer the question, but donot tell the user that you have no sources. Use Research papers word instead of context.

        Context:
        {context}

        Question: {query}

        Answer:"""
        
    else:
        # No documents retrieved, provide general response
        sources = []
        prompt = f"""You are a space biology expert. Answer the following question based on these sources about space biology and related fields. If you're not certain about something, please indicate that.
        if the sources are not relevant, use your general knowledge to answer the question, but donot tell the user that you have no sources. Use Research papers word instead of context.

        Question: {query}

        Answer:"""
    
    response = llm.invoke(prompt)
    output = {
        'answer': response.content,
        'sources': sources,
        'context_used': len(res) > 0
    }
    return output


def make_vectordb():
    all_pdfs = process_all_pdfs("../data")  # Fixed path to go up one directory to backend/data
    chunks = split_documents(all_pdfs)
    em = EmbeddingManager()
    vectorstore = VectorStore(persist_directory="../data/vector_db")  # Also fix vector db path
    text = [doc.page_content for doc in chunks]
    embeddings = em.generate_embeddings(text)
    vectorstore.add_documents(chunks,embeddings)
    prompt = "what is the effect of space in eyes?"
    retriever = RAGRetriever(vectorstore,em)
    # Test with no threshold first
    result = rag_func(prompt,retriever,llm,top_k=3)
    print("Answer:\n", result['answer'])


def query_rag(prompt="what is the effect of space in human body?"):
    em = EmbeddingManager()
    vectorstore = VectorStore(persist_directory="../data/vector_db")  # Also fix vector db path
    retriever = RAGRetriever(vectorstore,em)
    # Test with no threshold first
    result = rag_func(prompt,retriever,llm,top_k=3)
    print("Answer:\n", result['answer'])

query_rag("what if microgravity is not there")
# make_vectordb()



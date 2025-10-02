import os
from typing import List, Dict, Any
import numpy as np
from sentence_transformers import SentenceTransformer
import chromadb
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv

load_dotenv()

class EmbeddingManager:
    def __init__(self, model_name: str = "all-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)

    def embed_query(self, query: str) -> np.ndarray:
        return self.model.encode([query], convert_to_numpy=True)[0]


class VectorStore:
    def __init__(self, persist_directory: str = "data/vector_db", collection_name: str = "documents"):
        self.client = chromadb.PersistentClient(path=persist_directory)
        self.collection = self.client.get_collection(collection_name)

    def retrieve(self, query_embedding: np.ndarray, top_k: int = 5) -> List[Dict[str, Any]]:
        results = self.collection.query(
            query_embeddings=[query_embedding.tolist()],
            n_results=top_k
        )
        retrieved = []
        if results['distances'] and results['distances'][0]:
            for doc_id, doc_text, meta, dist in zip(
                results['ids'][0],
                results['documents'][0],
                results['metadatas'][0],
                results['distances'][0]
            ):
                retrieved.append({
                    "id": doc_id,
                    "content": doc_text,
                    "metadata": meta,
                    "similarity_score": 1 - dist
                })
        return retrieved

class RAGSystem:
    def __init__(self):
        self.embedding_manager = EmbeddingManager()
        self.vector_store = VectorStore()
        self.llm = ChatGoogleGenerativeAI(
            model="gemini-1.5-flash",
            temperature=0.1,
            max_output_tokens=1024
        )

    def query(self, user_query: str, top_k: int = 5, max_context_chars: int = 2000) -> Dict[str, Any]:
    
        query_emb = self.embedding_manager.embed_query(user_query)

       
        retrieved_docs = self.vector_store.retrieve(query_emb, top_k=top_k)
        if not retrieved_docs:
            return {"answer": "No relevant documents found.", "sources": []}

       
        context_parts = []
        current_len = 0
        for doc in retrieved_docs:
            if current_len + len(doc["content"]) > max_context_chars:
                break
            context_parts.append(doc["content"])
            current_len += len(doc["content"])
        context = "\n\n".join(context_parts)

    
        prompt = f"Use the following context to answer the question:\n\nContext:\n{context}\n\nQuestion: {user_query}\n\nAnswer:"
        response = self.llm.invoke(prompt)

       
        sources = [
            {
                "source": doc["metadata"].get("source_file", doc["metadata"].get("source", "unknown")),
                "page": doc["metadata"].get("page", "unknown"),
                "preview": doc["content"][:300] + "..."
            }
            for doc in retrieved_docs
        ]

        return {"answer": response.content, "sources": sources}

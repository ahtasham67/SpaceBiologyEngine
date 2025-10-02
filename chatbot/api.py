from fastapi import FastAPI
from pydantic import BaseModel
from ragclass import RAGSystem
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
rag = RAGSystem()

origins = [
    "http://localhost:3000",  
    "http://127.0.0.1:3000",
    "*"  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],    
    allow_headers=["*"],    
)

class Query(BaseModel):
    ques: str

@app.post("/chatbot")
async def chatbot_endpoint(query: Query):
    return rag.query(query.ques)

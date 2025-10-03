import os

from services.geminiServices import generate_text
from services.ragServices import query_rag
import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from typing import Optional, List
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

# Pydantic model for request body
class ConceptRequest(BaseModel):
    concept: str

# -----------------------------
# Supabase credentials
# -----------------------------
SUPABASE_URL = "https://kkatmfvuomnsyrqoyflf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrYXRtZnZ1b21uc3lycW95ZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTM2NzUsImV4cCI6MjA3NDQ4OTY3NX0.NTatWz9h1v6HtPbkBqlcqoPwo0w25D-VROekJ1X_Lro"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)




app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI", "status": "SpaceBio Engine Backend is running!"}

@app.get("/api/research/stats")
def get_research_stats():
    """Get sample research statistics for the dashboard"""
    return {
        "total_publications": 1847,
        "active_researchers": 342,
        "ongoing_projects": 28,
        "space_missions_covered": 15,
        "latest_research": [
            {
                "title": "Microgravity Effects on Plant Growth",
                "author": "Dr. Sarah Chen",
                "date": "2025-09-20",
                "category": "Plant Biology"
            },
            {
                "title": "Human Cardiovascular Adaptation in Space",
                "author": "Dr. Michael Rodriguez",
                "date": "2025-09-18",
                "category": "Human Health"
            },
            {
                "title": "Radiation Shielding for Mars Missions",
                "author": "Dr. Elena Kowalski",
                "date": "2025-09-15",
                "category": "Space Medicine"
            }
        ]
    }

@app.get("/api/health")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "SpaceBio Engine API"}

# -----------------------------
# Pydantic schemas
# -----------------------------

class User(BaseModel):
    username: str
    email: EmailStr
    password: str

class ChatSession(BaseModel):
    user_id: int

class Message(BaseModel):
    session_id: int
    sender: str
    message: str


# -----------------------------
# Users endpoints
# -----------------------------

@app.post("/add_user")
async def add_user(user: User):
    try:
        response = supabase.table("users").insert({
            "username": user.username,
            "email": user.email,
            "password": user.password
        }).execute()  # returns APIResponse

        return {"success": True, "data": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Login endpoint: returns true if username/password pair exists
@app.post("/login")
async def login(data: dict):
    username = data.get("username")
    password = data.get("password")
    if not username or not password:
        raise HTTPException(status_code=400, detail="Username and password required")
    try:
        response = supabase.table("users").select("*").eq("username", username).eq("password", password).execute()
        if response.data:
            return {"success": True, "authenticated": True, "user": response.data[0]}
        else:
            return {"success": True, "authenticated": False}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Login endpoint: get user by email
@app.get("/get_user_by_email/{email}")
async def get_user_by_email(email: str):
    try:
        response = supabase.table("users").select("*").eq("email", email).execute()
        if response.data:
            return {"success": True, "user": response.data[0]}
        else:
            return {"success": False, "error": "User not found"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
# -----------------------------
# Chat session endpoints
# -----------------------------
@app.post("/start_session")
async def start_session(session: ChatSession):
    try:
        response = supabase.table("chat_sessions").insert({
            "user_id": session.user_id  # integer ID, no str()
        }).execute()

        return {"success": True, "data": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# -----------------------------
# Messages endpoints
# -----------------------------
@app.post("/send_message")
async def send_message(message: Message):
    try:
        # Save user message
        user_message_response = supabase.table("messages").insert({
            "session_id": message.session_id,  # integer ID
            "sender": message.sender,
            "message": message.message,
            "user_id": 10
        }).execute()

        # Generate AI response using RAG
        rag_result = query_rag(message.message)
        ai_response = rag_result.get('answer', 'Sorry, I could not generate a response.')
        
        # Save AI message
        ai_message_response = supabase.table("messages").insert({
            "session_id": message.session_id,
            "sender": "ai",
            "message": ai_response,
            "user_id": 10
        }).execute()

        return {"success": True, "data": ai_response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/get_messages/{user_id}")
async def get_messages(user_id: int):
    try:
        response = supabase.table("messages").select("*").eq("user_id", user_id).execute()
        return {"success": True, "messages": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/explain")
def explain_concept(request: ConceptRequest):
    """Explain a biological concept related to space biology"""
    concept = request.concept
    prompt = f"""system prompt : donot use ** * etc. be concise and precise. explain in easy words  
    user prompt : 
    {concept}"""
    explanation = generate_text(prompt)
    # explanation = "Space biology is the study of how living organisms adapt to the conditions of space, including microgravity, radiation, and isolation. It encompasses research on human physiology, plant growth, microbial behavior, and animal biology in space environments. Understanding these effects is crucial for long-duration space missions and the health of astronauts."
    return {"concept": prompt, "explanation": explanation}

# git add . && git commit -m "Updated " && git push

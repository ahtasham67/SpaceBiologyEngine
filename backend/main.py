from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from typing import Optional, List

import os

# -----------------------------
# Supabase credentials
# -----------------------------
SUPABASE_URL = "https://kkatmfvuomnsyrqoyflf.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrYXRtZnZ1b21uc3lycW95ZmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTM2NzUsImV4cCI6MjA3NDQ4OTY3NX0.NTatWz9h1v6HtPbkBqlcqoPwo0w25D-VROekJ1X_Lro"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()

# -----------------------------
# Pydantic schemas
# -----------------------------
class User(BaseModel):
    username: str
    email: EmailStr

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
            "email": user.email
        }).execute()  # returns APIResponse

        # Just return the data
        return {"success": True, "data": response.data}

    except Exception as e:
        # If anything fails, FastAPI will return 500 with this message
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
        response = supabase.table("messages").insert({
            "session_id": message.session_id,  # integer ID
            "sender": message.sender,
            "message": message.message
        }).execute()

        return {"success": True, "data": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/get_messages/{session_id}")
async def get_messages(session_id: int):
    try:
        response = supabase.table("messages").select("*").eq("session_id", session_id).execute()
        return {"success": True, "messages": response.data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

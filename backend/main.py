import os

from services.geminiServices import generate_text
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()

app = FastAPI()

# Pydantic model for request body
class ConceptRequest(BaseModel):
    concept: str

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # default 8000 if not set
    uvicorn.run(app, host="0.0.0.0", port=port)
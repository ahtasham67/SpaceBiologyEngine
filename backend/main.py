import os

import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

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


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # default 8000 if not set
    uvicorn.run(app, host="0.0.0.0", port=port)
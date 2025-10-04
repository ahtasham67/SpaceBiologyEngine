# 🚀 SpaceBio Engine

<div align="center">

![SpaceBio Engine](https://img.shields.io/badge/SpaceBio-Engine-blue?style=for-the-badge&logo=rocket)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=for-the-badge&logo=fastapi)
![NASA](https://img.shields.io/badge/NASA-Dataset-red?style=for-the-badge&logo=nasa)

**An intelligent platform combining AI-powered chatbot and interactive digital twin technology to explore space biology effects on the human body**

[🚀 Getting Started](#installation)

</div>

---
### Datasets Used : 
-   **https://github.com/jgalazka/SB_publications/tree/main (provided by NASA)**
-   **https://humanresearchroadmap.nasa.gov/Documents/IRP_Rev-Current.pdf (provided by NASA)**
-   **https://www.bcm.edu/academic-centers/space-medicine/translational-research-institute/space-health-resources/how-the-body-changes-in-space (external)**
   

## 🌌 About

SpaceBio Engine is an innovative web platform that makes space biology research accessible through two powerful features: an intelligent AI research chatbot and an interactive digital twin of the human body.

Our AI chatbot answers "what-if" questions about space biology, explains complex research findings, and provides insights backed by NASA datasets. The interactive digital twin allows users to click on different body parts to discover how space environments affect human physiology, with AI-powered explanations and references to original research papers.

Whether you're a researcher, student, or space enthusiast, SpaceBio Engine transforms complex space biology data into understandable, interactive experiences.

## ✨ Key Features

### 🤖 AI Chatbot
- **What-if Questions**: Ask hypothetical scenarios about space biology
- **Research Explanations**: Get expert explanations of complex scientific findings  
- **NASA Data Integration**: Answers backed by authentic NASA research datasets
- **Interactive Learning**: Conversational interface for intuitive knowledge discovery

### 👤 Interactive Digital Twin
- **Clickable Body Parts**: Explore effects on different organ systems
- **Space Environment Impact**: Learn how microgravity, radiation, and space conditions affect human physiology
- **AI-Powered Explanations**: Detailed insights for each physiological effect
- **Research References**: Direct links to original NASA research papers

### 📚 NASA Research Integration
- **Original Research Papers**: Access to scientific publications and studies
- **Credible Sources**: All information backed by peer-reviewed NASA datasets
- **Up-to-date Information**: Latest findings in space biology research
- **Citation Support**: Proper references for academic and research use

### 🧬 Space Biology Focus
- **Microgravity Effects**: Specialized insights on zero-gravity impact
- **Radiation Exposure**: Understanding space radiation effects on human body
- **Long-term Space Travel**: Physiological changes during extended missions
- **Astronaut Health**: Real-world applications for space mission planning

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-friendly interface

### Backend
- **FastAPI** - High-performance Python web framework
- **Pydantic** - Data validation and serialization
- **NASA Datasets** - Space biology research data integration
- **AI/ML Integration** - Intelligent response generation

### Features
- **Cosmic Theme** - Space-inspired UI/UX design
- **Interactive Animations** - Engaging user experience
- **Real-time Chat** - Instant AI responses
- **Research Citations** - Academic-grade referencing

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- Git

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/arafatrahman216/SpaceBiologyEngine.git
cd SpaceBiologyEngine/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
Open another terminal
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
# or just run : ./run.sh
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📱 Usage

### 1. AI Chatbot
1. Navigate to the **Chat** section
2. Ask questions like:
   - "What happens to bones in microgravity?"
   - "How does space radiation affect DNA?"
   - "What if an astronaut stays in space for 2 years?"
3. Get detailed, research-backed answers

### 2. Digital Twin Explorer
1. Go to the **Digital Twin** page
2. Click on different body parts (heart, brain, bones, etc.)
3. View detailed information about space effects
4. Access related research papers and studies
5. Effects can be explained by AI in a easy, concise and precise manner


## 🏗️ Project Structure

```
SpaceBiologyEngine/
├── frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── data/           # Space biology datasets
│   │   ├── services/           
│   │   ├── hooks/           
│   │   ├── context/         
│   │   └── utils/          # Helper functions
│   └── public/             # Static assets
├── backend/                 # FastAPI backend
│   ├── main.py            # Application entry point
│   ├── models/            # Data models
│   ├── routes/            # API endpoints
│   └── services/          # Business logic
│   └── utils/          # helper functions
└── README.md              # Project documentation
```

## 👥 Team

Our passionate team of Computer Science students from Bangladesh University of Engineering and Technology (BUET), building innovative solutions to make space biology research accessible through AI and interactive technology.

| Role | Name | Institution | Email |
|------|------|-------------|-------|
| **Team Lead** | Arafat Rahman | BUET CSE | arafatrahman219@gmail.com |
| **Member 2** | Dibya Jyoti Sarker | BUET CSE | dj2001dhaka@gmail.com |
| **Member 3** | Ahtasham Haque | BUET CSE | ahtashamulhaque20@gmail.com |
| **Member 4** | Md. Sabbir Ahmmed Payel | BUET CSE | robinson007896@gmail.com |

## 🌟 Features in Development

- [ ] **Advanced AI Models**: Integration with more sophisticated language models
- [ ] **3D Visualizations**: Enhanced digital twin with 3D organ models
- [ ] **Research Collaboration**: Tools for researchers to collaborate and share findings

## 🙏 Acknowledgments

- **NASA** for providing comprehensive space biology datasets

## 📞 Contact

For questions, suggestions, or collaborations:

- **Project Repository**: [GitHub](https://github.com/arafatrahman216/SpaceBiologyEngine)
- **Institution**: Bangladesh University of Engineering and Technology (BUET)

---

<div align="center">

*Exploring the cosmos of space biology, one click at a time* 🚀

</div>

#!/bin/bash

# lsof -ti:8000 | xargs kill -9 2>/dev/null
# lsof -ti:5173 | xargs kill -9 2>/dev/null

# cd backend
# python -m venv venv
# source venv/bin/activate
# pip install -r requirements.txt

# uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# cd ../frontend
# npm run dev &

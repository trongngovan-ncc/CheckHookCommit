import os
import json
import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
from prompt import BASE_PROMPT_CHAIN_OF_THOUGHT
from dotenv import load_dotenv
load_dotenv()

from google import genai

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

class DiffRequest(BaseModel):
    diff: str
@app.post("/llm-review")
async def llm_review(req: DiffRequest):
    diff = req.diff
    if not diff:
        raise HTTPException(status_code=400, detail="Missing diff")

    try:
        payload = {
            "model": "gpt-oss:latest",
            "messages": [
                {"role": "system", "content": BASE_PROMPT_CHAIN_OF_THOUGHT},
                {"role": "user", "content": f"Đây là Git Diff cần review:\n\n{diff}"}
            ],
            "stream": True,
            "options": {
                "temperature": 0.3
            }
        }

        with requests.post(
            "http://localhost:11434/api/chat",
            json=payload,
            stream=True,
            timeout=300
        ) as resp:
            resp.raise_for_status()
            
            review = ""
            for line in resp.iter_lines():
                if not line:
                    continue
                try:
                    data = json.loads(line.decode("utf-8"))
                    review += data.get("message", {}).get("content", "")
                except (json.JSONDecodeError, KeyError):
                    continue

        return {"review": review.strip()}

    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Ollama API request failed: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
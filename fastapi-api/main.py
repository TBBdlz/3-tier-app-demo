from fastapi import FastAPI
from datetime import datetime

app = FastAPI()


@app.get("/api/data")
def read_root():
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return {"message": "Hello from FastAPI", "time": current_time}

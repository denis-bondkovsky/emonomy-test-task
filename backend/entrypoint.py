from fastapi import FastAPI

from .routes import replacements

app = FastAPI()

app.include_router(replacements.router, prefix='/api/v1')

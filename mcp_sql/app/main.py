from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.database import init_pool, close_pool, get_pool
from app.routes.users_routes import router as users_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Gestiona el ciclo de vida de la aplicación: pool al iniciar, cierre al terminar."""
    await init_pool()
    yield
    await close_pool()


app = FastAPI(title="API Users", version="1.0.0", lifespan=lifespan)

app.include_router(users_router)


@app.get("/")
def root():
    return {"message": "API Users - Documentación en /docs"}

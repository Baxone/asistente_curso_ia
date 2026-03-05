import aiomysql
from contextlib import asynccontextmanager
from app.config import DB_CONFIG

# Pool global, se inicializa en el lifespan de FastAPI
_pool: aiomysql.Pool | None = None


async def init_pool() -> aiomysql.Pool:
    """Crea y retorna un pool de conexiones asíncronas a la base de datos."""
    global _pool
    _pool = await aiomysql.create_pool(
        host=DB_CONFIG["host"],
        port=DB_CONFIG["port"],
        user=DB_CONFIG["user"],
        password=DB_CONFIG["password"],
        db=DB_CONFIG["database"],
        charset=DB_CONFIG["charset"],
        cursorclass=aiomysql.DictCursor,
        minsize=1,
        maxsize=10,
        autocommit=True,
    )
    return _pool


async def close_pool() -> None:
    """Cierra el pool de conexiones."""
    global _pool
    if _pool:
        _pool.close()
        await _pool.wait_closed()
        _pool = None


def get_pool() -> aiomysql.Pool:
    """Obtiene el pool de conexiones. Debe llamarse después de init_pool()."""
    if _pool is None:
        raise RuntimeError("El pool de base de datos no está inicializado")
    return _pool


@asynccontextmanager
async def get_connection():
    """Context manager para obtener una conexión del pool."""
    pool = get_pool()
    async with pool.acquire() as conn:
        yield conn

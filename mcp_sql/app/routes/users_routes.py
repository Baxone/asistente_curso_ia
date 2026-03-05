import aiomysql
from fastapi import APIRouter, Depends, HTTPException
from app.controllers.users_controller import get_all_users, get_user_by_id
from app.database import get_pool
from app.models.user_model import User

router = APIRouter(prefix="/users", tags=["users"])


def get_db_pool():
    """Dependencia que inyecta el pool de base de datos."""
    return get_pool()


@router.get("", response_model=list[User])
async def list_users(pool: aiomysql.Pool = Depends(get_db_pool)):
    """Obtiene todos los usuarios."""
    return await get_all_users(pool)


@router.get("/{user_id}", response_model=User)
async def get_user(user_id: int, pool: aiomysql.Pool = Depends(get_db_pool)):
    """Obtiene un usuario por ID."""
    user = await get_user_by_id(pool, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return user

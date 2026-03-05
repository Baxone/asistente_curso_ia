import aiomysql
from app.models.user_model import User


async def get_all_users(pool: aiomysql.Pool) -> list[User]:
    """Obtiene todos los usuarios de la tabla users."""
    async with pool.acquire() as conn:
        async with conn.cursor() as cursor:
            await cursor.execute("SELECT id, name, email, created_at FROM users")
            rows = await cursor.fetchall()
            return [User.model_validate(row) for row in rows]


async def get_user_by_id(pool: aiomysql.Pool, user_id: int) -> User | None:
    """Obtiene un usuario por su ID."""
    async with pool.acquire() as conn:
        async with conn.cursor() as cursor:
            await cursor.execute(
                "SELECT id, name, email, created_at FROM users WHERE id = %s",
                (user_id,),
            )
            row = await cursor.fetchone()
            return User.model_validate(row) if row else None

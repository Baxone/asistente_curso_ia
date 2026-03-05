from pydantic import BaseModel, ConfigDict
from datetime import datetime


class User(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: str
    created_at: datetime


class UserCreate(BaseModel):
    name: str
    email: str

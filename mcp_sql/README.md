# API Users - FastAPI

API REST para gestionar usuarios contra la base de datos `prueba_mcp`.

## Estructura

```
app/
├── main.py              # Punto de entrada
├── config.py            # Configuración (DB)
├── database.py          # Conexión MySQL
├── models/
│   └── user_model.py    # Modelo Pydantic User
├── controllers/
│   └── users_controller.py
└── routes/
    └── users_routes.py
```

## Endpoints

- `GET /users` - Lista todos los usuarios
- `GET /users/{id}` - Obtiene un usuario por ID

## Instalación

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Configuración

Copia `.env.example` a `.env` y ajusta las variables de conexión a MySQL:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=prueba_mcp
```

## Ejecutar

```bash
uvicorn app.main:app --reload
```

Documentación interactiva: http://localhost:8000/docs

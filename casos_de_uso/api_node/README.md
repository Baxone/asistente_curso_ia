# API Usuarios - Node.js + Express + MySQL

## Pasos para ejecutar

### 1. Crear la base de datos (si no existe)

```bash
mysql -u root -proot -e "CREATE DATABASE IF NOT EXISTS oficina;"
```

### 2. Crear la tabla usuarios

```bash
mysql -u root -proot oficina < database/usuarios.sql
```

### 3. Iniciar el servidor

```bash
cd casos_de_uso/api_node
npm start
```

### 4. Probar el endpoint

```bash
curl http://localhost:3000/api/usuarios/1
```

## Estructura del proyecto

```
api_node/
├── config/database.js    # Conexión MySQL
├── controllers/          # Controladores
├── database/usuarios.sql # Script creación tabla
├── models/Usuario.js     # Modelo usuario
├── routes/usuarios.js    # Rutas
├── index.js              # Entrada
├── .env                  # Variables de entorno
└── package.json
```

## Endpoint

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/usuarios/:id | Obtiene usuario por ID |

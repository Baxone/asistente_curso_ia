require('dotenv').config();
const express = require('express');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/usuarios', usuariosRouter);

/**
 * Ruta raíz. Devuelve información de la API.
 * @param {import('express').Request} req - Request
 * @param {import('express').Response} res - Response
 */
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de usuarios. Endpoint: GET /api/usuarios/:id' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

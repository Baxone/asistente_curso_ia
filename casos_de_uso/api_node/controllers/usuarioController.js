const Usuario = require('../models/Usuario');

/**
 * Obtiene un usuario por ID.
 * Responde con el usuario o 404 si no existe.
 * @param {import('express').Request} req - Request con params.id
 * @param {import('express').Response} res - Response
 * @returns {Promise<void>}
 */
async function GET_BY_ID(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('Error en GET_BY_ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = { GET_BY_ID };

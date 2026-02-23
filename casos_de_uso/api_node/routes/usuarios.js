const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

/** GET /api/usuarios/:id - Obtiene un usuario por ID */
router.get('/:id', usuarioController.GET_BY_ID);

/**
 * Router de rutas de usuarios.
 * @type {import('express').Router}
 */
module.exports = router;

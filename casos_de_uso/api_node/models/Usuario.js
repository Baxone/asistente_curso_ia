const { getPool } = require('../config/database');

/**
 * Obtiene un usuario por su ID desde la base de datos.
 * Usa prepared statements (?) para evitar SQL Injection.
 * @param {number} id - ID del usuario
 * @returns {Promise<Object|null>} Usuario encontrado o null si no existe
 */
async function findById(id) {
  const pool = await getPool();
  const [rows] = await pool.execute(
    'SELECT id, nombre, email, activo, created_at, updated_at FROM usuarios WHERE id = ?',
    [id]
  );
  return rows.length > 0 ? rows[0] : null;
}

module.exports = { findById };

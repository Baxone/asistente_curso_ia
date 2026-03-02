const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/**
 * Obtiene el usuario que tenga el nombre y apellido indicados.
 * Usa consultas parametrizadas para evitar inyección SQL.
 * @param {string} name - Nombre del usuario
 * @param {string} surname - Apellido del usuario
 * @returns {Promise<object|null>} Usuario encontrado o null
 */
async function select_sql(name, surname) {
    if (typeof name !== 'string' || typeof surname !== 'string') {
        throw new TypeError('name y surname deben ser strings');
    }
    const [rows] = await pool.execute(
        'SELECT * FROM users WHERE name = ? AND surname = ?',
        [name, surname]
    );
    return rows.length > 0 ? rows[0] : null;
}

module.exports = { select_sql, pool };
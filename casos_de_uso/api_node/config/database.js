const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * Crea y devuelve un pool de conexiones a MySQL.
 * @returns {Promise<mysql.Pool>} Pool de conexiones configurado
 */
async function getPool() {
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'oficina',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

module.exports = { getPool };

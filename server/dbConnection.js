// db.js
const mysql = require('mysql2');

// Create a pool of database connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'mydb', // Change this to your actual database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise(); // Export the promise-based pool

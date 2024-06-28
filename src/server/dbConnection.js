const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'rashuand25',
  port: 3306,
  password: 'coding101!',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connection established successfully on port 3306!');
    connection.release(); // Release the connection
  }
});

module.exports = pool.promise();

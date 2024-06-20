// routes/signup.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../dbConnection.js'); // Import your database connection

router.post('/', (req, res) => {
  const { firstname, username, password, email } = req.body;

  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const query = 'INSERT INTO customer_login (first_name, email, user_name, password) VALUES (?, ?, ?, ?)';
  db.query(query, [firstname, username, hashedPassword, email], (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('An error occurred during registration');
    } else {
      res.send('User registered successfully');
    }
  });
});

module.exports = router;

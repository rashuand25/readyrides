const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../server/dbConnection.js');

router.post('http://localhost:3001/signup', async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, username, password } = req.body;

    // Validate fields
    if (!phoneNumber || !username || !password) {
      return res.status(400).send('All fields are required.');
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const query = 'INSERT INTO customer_login (first_name, last_name, email, phone_number, user_name, password) VALUES (?, ?, ?, ?, ?, ?)';
    await db.query(query, [firstname, lastname, email, phoneNumber, username, hashedPassword]);

    res.send('User registered successfully');
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).send('An error occurred during registration');
  }
});

module.exports = router;

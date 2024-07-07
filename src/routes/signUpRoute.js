const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../server/dbConnection.js');

router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, username, password } = req.body;

        // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const query = 'INSERT INTO customer_login ( first_name, last_name, email, phone_number, user_name, password) VALUES (?, ?, ?, ?, ?, ?)';
    await db.query(query, [firstName, lastName, email, phoneNumber, username, hashedPassword]);

    res.send({ message: 'User registered successfully'});
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).send('An error occurred during registration');
  }
});

module.exports = router;

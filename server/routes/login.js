// routes/login.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../dbConnection.js'); // Import your database connection

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM customer_login WHERE user_name = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error during login:', err.message);
      res.status(500).send('An error occurred during login');
    } else if (results.length > 0) {
      const user = results[0];
      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (passwordIsValid) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Incorrect username or password' });
      }
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  });
});

module.exports = router;

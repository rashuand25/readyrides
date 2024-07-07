const express = require('express');
const router = express.Router();
const db = require('../server/dbConnection.js');

router.post('/feedback', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO feedback ( name, email, message) VALUES (?, ?, ?)';
    await db.query(query, [name, email, message]);

    res.send({ message: 'Feedback sent successfully'});
  } catch (error) {
    console.error('Error during submit:', error.message);
    res.status(500).send('An error occurred while trying to send feedback');
  }
});

module.exports = router;

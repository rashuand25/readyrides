// routes/cars.js (or any other suitable file)
const express = require('express');
const router = express.Router();
const db = require('../dbConnection.js'); // Your database connection

// Route to get random cars
router.get('/random-cars', async (req, res) => {
  try {
    // Query your database to get random cars (adjust the query as needed)
    const query = 'SELECT * FROM vehicles ORDER BY RAND() LIMIT 20'; // Change the table name and limit as desired
    const cars = await db.query(query);

    res.json(cars); // Send the cars as JSON
  } catch (error) {
    console.error('Error fetching random cars:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

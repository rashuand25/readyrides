const express = require('express');
const router = express.Router();
const db = require('../server/dbConnection.js');

// Define your route to fetch car data
router.get('/', async (req, res) => {  
  const query = 'select * from vehicles ORDER BY RAND()';
  try {
    const [results] = await db.query(query);
    res.json({ vehicles: results});
  } catch (err) {
    console.error('Error fetching data: ', err);
    res.status(500).send('Error fetching data from database');
  }
});

module.exports = router;

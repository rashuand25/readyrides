const express = require('express');
const router = express.Router();
const db = require('../server/dbConnection.js');

router.get('/:vehicle_id', async (req, res) => {  
    const query = 'select * from vehicles where vehicle_id = ?';
    try {
      const [results] = await db.query(query, [req.params.vehicle_id]);
      res.json({ vehicle: results[0]});
    } catch (err) {
      console.error('Error fetching data: ', err);
      res.status(500).send('Error fetching data from database');
    }
});

module.exports = router;

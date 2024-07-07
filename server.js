const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001

// Middleware setup
app.use(cors()); // Configure CORS before routes
app.use(express.json()); // Parse JSON requests
app.use('/images', express.static('src/images')); //Set up static server for images
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Importing route files
const signupRoutes = require('./src/routes/signUpRoute');
const vehicleRoute = require('./src/routes/vehicleRoute');
const feedbackRoute = require('./src/routes/feedbackRoute')

// Using the routes
app.use('/', signupRoutes);
app.use('/vehicles', vehicleRoute); // specifying the path for vehicleRoute
app.use('/', feedbackRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

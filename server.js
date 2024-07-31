const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001

// Middleware setup
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use('/images', express.static('src/images')); //Set up static server for images
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Importing route files
const signupRoutes = require('./src/routes/signUpRoute');
const singleVehicle = require('./src/routes/singleCarRoute')
const vehicleRoute = require('./src/routes/allVehicleRoute');
const feedbackRoute = require('./src/routes/feedbackRoute');

// Using the routes
app.use('/', signupRoutes);
app.use('/car', singleVehicle);
app.use('/vehicles', vehicleRoute);
app.use('/', feedbackRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

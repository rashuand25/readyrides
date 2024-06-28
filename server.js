const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./src/server/dbConnection');

// Middleware setup
app.use(cors()); // Configure CORS before routes

// Body parser middleware
app.use(bodyParser.json());

// Import route files
const signupRoutes = require('./src/server/routes/signUpRoute');

// Use the routes
app.use('/', signupRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error to the console

  let statusCode = 500;
  let message = 'Internal server error';

  if (err instanceof SyntaxError) {
    statusCode = 400;
    message = 'Bad Request: Invalid JSON data';
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    message = 'Unauthorized: Invalid token';
  } // Add more custom error handling as needed

  res.status(statusCode).send({ status: statusCode, message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

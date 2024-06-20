const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3001;
const db = require('./server/dbConnection');

app.use(cors());
app.use(bodyParser.json());


// Import route files
const signupRoutes = require('./server/routes/signup');
const loginRoutes = require('./server/routes/login');

// Use the routes
app.use('/signup', signupRoutes);
// app.use('/login', loginRoutes);
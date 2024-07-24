const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = require('./config/corsOptions').default;
const app = express();

const letterRoutes = require('./routes/letterRoutes');

// Cors configuration
app.use(cors(corsOptions));

// Middleware to parse JSON
app.use(express.json());

// Letter Routes
app.use('/letters', letterRoutes);

// Basic Routes
app.get('/', (req, res) => {
    res.send('Server on, silly 👿');
});

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const letterRoutes = require('./routes/letterRoutes');

// Middleware to parse JSON
app.use(express.json());

// Letter Routes
app.use('/letters', letterRoutes);

// Basic Routes
app.get('/', (req, res) => {
    res.send('Server on, silly 👿');
});

module.exports = app;

const cors = require('cors');

const corsOptions = {
    origin: ['https://yellow-project-api.onrender.com', 'https://yellow-project.onrender.com', 'http://localhost:3000'], 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = corsOptions;

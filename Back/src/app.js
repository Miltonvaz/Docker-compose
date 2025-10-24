const express = require('express');
const bodyParser = require('body-parser');
const itemsRoutes = require('./routes/items');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Routes
app.use('/api/items', itemsRoutes);

module.exports = app;

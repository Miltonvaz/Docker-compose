const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./db'); // este archivo contiene el Pool de PostgreSQL
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos PostgreSQL
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

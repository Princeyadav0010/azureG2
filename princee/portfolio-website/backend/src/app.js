const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const portfolioRoutes = require('./routes/portfolioRoutes');
const connectDB = require('./utils/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev')); // HTTP request logger
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Comic Bee</h1>');
});

// Database connection test route
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            message: 'Database connected successfully',
            timestamp: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            message: 'Database connection failed',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Comic Bee server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to get started`);
});
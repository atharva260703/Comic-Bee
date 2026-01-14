require('dotenv').config();
const express = require("express");
const cors = require("cors");
const comicRoutes = require("./routes/comics.routes.js");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/comics",comicRoutes);
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Comic Bee</h1>');
    res.send("<p>Comic Bee API is running and gone up live </p>");
});
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "ONLINE with http://localhost:${PORT");
})
app.get('/comicbee-db', async (req, res) => {
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
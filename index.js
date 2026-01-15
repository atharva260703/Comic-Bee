require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const pool = require("./db");
const comicRoutes = require("./routes/comics.routes.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send(`
        <h1>Welcome to Comic Bee</h1>
        <p>Comic Bee API is running ONLINE </p>
    `);
});

app.use("/comics",comicRoutes);

app.get("/comicbee",async(req,res)=>{
    try {
        const result = await pool.query("SELECT *FROM authors");
        res.json({
            message: "Database connected successfully",
            timestamp: result.rows[0].now
        });
    }
    catch(error) {
        result.status(500).json({
            message: "Database Connection failure",
            error: error.message
        });
    }
});

app.listen(PORT, ()=>{
    console.log("Comic Bee Server is running on port ${PORT}");
    console.log("Visit https://localhost:${PORT}");
});
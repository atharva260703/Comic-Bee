require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
    ssl: false,
    max : 15,
    idleTimeoutMillis: 20000,
    connectionTimeoutMillis: 10000,
});

pool.connect()
    .then(client => {
        console.log("Connected to PostgreSQL Database");
        client.release();
    })
    .catch(err => {
        console.error("PostgreSQL connection failed:", err.message);
    });

module.exports = pool;

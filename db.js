require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : false,
    max: 20,
    idleTimeoutMillis: 30000, 
    connectionTimeoutMillis: 2000,
});
pool.connect((err, client, release) => {
    if (err) {
        console.error('Connection failed:', err.message);
        return;
    }
    console.log('Connected to PostgreSQL database successfully.');
    release();
});
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});
module.exports = pool;
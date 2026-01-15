require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl : process.env.PGSSLMODE === "require" ?{
        rejectUnauthorized: true
    }: false,
    max: 15,
    idleTimeoutMillis: 20000,
    connectionTimeoutMillis: 10000,
});
pool.on("error",(err,client)=>{
    if(err) {
        console.error("Connection Failure",err.message);
        return;
    }
    console.log("Connected To PostgresSQL Database successfully");
    release();
});
pool.on("error",(err,client)=>{
    console.error("Unexected error on idle client",err);
    process.exit(1);
});
module.exports = pool;
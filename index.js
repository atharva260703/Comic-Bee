import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import pool from "./db.js";
import comicRoutes from "./routes/comics.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/comics", comicRoutes);

app.get("/comicbee", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Database connected successfully",
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({
      message: "Database Connection failure",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Comic Bee Backend Running");
});

export default app;
import dotenv from "dotenv";
import https from "https";
import fs from "fs";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import pool from "./db.js";
import comicRoutes from "./routes/comics.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "https://comicbee.local:3000",
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
const frontendPath = path.resolve(
  __dirname,
  "../Comic-Bee-frontend/Comic-Bee-frontend/dist"
);

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
const httpsOptions = {
  key: fs.readFileSync("./comicbee.local-key.pem"),
  cert: fs.readFileSync("./comicbee.local.pem"),
};
https.createServer(httpsOptions, app).listen(PORT, "0.0.0.0", () => {
  console.log(`Comic Bee Server running securely on port ${PORT}`);
  console.log(`App available at https://comicbee.local:${PORT}`);
});

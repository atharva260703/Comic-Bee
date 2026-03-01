import express from "express";
import comicsController from "../controllers/comics.controller.js";

const router = express.Router();

// Get all comics
router.get("/", comicsController.getAllComics);

// Create comic
router.post("/", comicsController.createComic);

export default router;
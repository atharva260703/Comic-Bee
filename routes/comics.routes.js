import express from "express";
import comicsController from "../controllers/comics.controller.js";
const router = express.Router();
router.get("/", comicsController.getAllComics);
router.post("/", comicsController.createComic);
export default router;
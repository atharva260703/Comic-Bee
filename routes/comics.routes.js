import express from "express";
const router = express.Router();

const comicsController = require("../controllers/comics.controller");

router.get("/", comicsController.getAllComics);
router.post("/", comicsController.createComic);

module.exports = router;
export default router;
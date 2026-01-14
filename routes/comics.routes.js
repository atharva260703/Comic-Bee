const express = require("express");
const router = express.Router();
const comicsController = require("../controllers/comics.controller.js");
router.get("/", comicsController.getAllComics);
module.exports = router;
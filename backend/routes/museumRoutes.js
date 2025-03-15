const express = require("express");
const { getAllMuseums, getMuseumById } = require("../controllers/museumController");

const router = express.Router();

router.get("/", getAllMuseums); // Fetch all museums
router.get("/:id", getMuseumById); // Fetch details of a specific museum

module.exports = router;

const express = require("express");
const { getAllBookings, adminValidateTicket } = require("../controllers/adminController");

const router = express.Router();

router.get("/bookings", getAllBookings); // Admin fetches all bookings
router.post("/validate", adminValidateTicket); // Admin validates ticket manually

module.exports = router;

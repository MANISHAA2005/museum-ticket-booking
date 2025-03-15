const express = require("express");
const { createBooking, getUserBookings } = require("../controllers/bookingController");

const router = express.Router();

router.post("/book", createBooking); // Create a new booking
router.get("/user/:userId", getUserBookings); // Get bookings for a user

module.exports = router;

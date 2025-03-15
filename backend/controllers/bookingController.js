const Booking = require("../models/Booking");

//Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { userId, museumId, tickets, amountPaid } = req.body;

        const newBooking = new Booking({
            userId,
            museumId,
            tickets,
            amountPaid,
            status: "Confirmed"
        });

        await newBooking.save();
        res.status(201).json({ message: "Booking successful!", booking: newBooking });

    } catch (error) {
        res.status(500).json({ error: "Failed to book ticket" });
    }
};

// Fetch all bookings for a user
exports.getUserBookings = async (req, res) => {
    try {
        const userId = req.params.userId;
        const bookings = await Booking.find({ userId });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};

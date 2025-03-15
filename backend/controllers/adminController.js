const Booking = require("../models/Booking");

// Fetch all bookings for admin
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};

//  Manually validate a ticket (alternative to QR)
exports.adminValidateTicket = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.findById(bookingId);

        if (!booking || booking.status === "Used") {
            return res.status(400).json({ error: "Invalid or already used ticket" });
        }

        booking.status = "Used";
        await booking.save();

        res.status(200).json({ message: "Ticket validated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Ticket validation failed" });
    }
};

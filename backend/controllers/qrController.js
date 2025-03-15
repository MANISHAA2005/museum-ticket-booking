const QRCode = require("qrcode");
const Booking = require("../models/Booking");

// Generate QR Code after booking
exports.generateQRCode = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.findById(bookingId);

        if (!booking) return res.status(404).json({ error: "Booking not found" });

        const qrData = { bookingId: booking._id, userId: booking.userId };
        const qrImage = await QRCode.toDataURL(JSON.stringify(qrData));

        // Send QR Code as response
        res.status(200).json({ qrCode: qrImage });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
};

// Validate QR Code at museum entry
exports.validateQRCode = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.findById(bookingId);

        if (!booking || booking.status === "Used") {
            return res.status(400).json({ error: "Invalid or already used ticket" });
        }

        // Mark ticket as used
        booking.status = "Used";
        await booking.save();

        res.status(200).json({ message: "Ticket validated successfully" });
    } catch (error) {
        res.status(500).json({ error: "QR validation failed" });
    }
};

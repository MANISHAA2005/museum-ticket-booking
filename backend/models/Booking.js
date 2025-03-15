const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    museumId: { type: mongoose.Schema.Types.ObjectId, ref: "Museum", required: true },
    tickets: { type: Number, required: true, min: 1 },
    amountPaid: { type: Number, required: true },
    status: { type: String, enum: ["Confirmed", "Used"], default: "Confirmed" },
    qrCode: { type: String } // Stores generated QR Code
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);

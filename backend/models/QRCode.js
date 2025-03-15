const mongoose = require("mongoose");

const qrCodeSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    qrCode: { type: String, required: true }, // Base64 encoded QR Code
    status: { type: String, enum: ["Active", "Used"], default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("QRCode", qrCodeSchema);

const express = require("express");
const { generateQRCode, validateQRCode } = require("../controllers/qrController");

const router = express.Router();

router.post("/generate", generateQRCode); // Generate QR Code for a booking
router.post("/validate", validateQRCode); // Validate QR Code at museum entry

module.exports = router;

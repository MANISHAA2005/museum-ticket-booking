const mongoose = require("mongoose");

const museumSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    description: { type: String, required: true },
    image: { type: String }, // Path to museum image
    entryFee: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Museum", museumSchema);

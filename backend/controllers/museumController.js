const Museum = require("../models/Museum");

// Get all museums
exports.getAllMuseums = async (req, res) => {
    try {
        const museums = await Museum.find();
        res.status(200).json(museums);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch museums" });
    }
};

// Get museum by ID
exports.getMuseumById = async (req, res) => {
    try {
        const museum = await Museum.findById(req.params.id);
        if (!museum) {
            return res.status(404).json({ message: "Museum not found" });
        }
        res.status(200).json(museum);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch museum details" });
    }
};

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const museumRoutes = require("./routes/museumRoutes");
const qrRoutes = require("./routes/qrRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/museums", museumRoutes);
app.use("/api/qr", qrRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connect("mongodb://localhost:27017/museumBooking", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
    .catch((error) => console.log("MongoDB Connection Error:", error));

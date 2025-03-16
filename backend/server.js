const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const bookingRoutes = require("./routes/bookingRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const museumRoutes = require("./routes/museumRoutes");
const qrRoutes = require("./routes/qrRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is up and running! 🚀");
});

// Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// Register Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/museums", museumRoutes);
app.use("/api/qr", qrRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB Connection
<<<<<<< HEAD
mongoose
  .connect("mongodb://127.0.0.1:27017/museumBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server only after DB connection is successful
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit the app if DB connection fails
  });

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
=======
mongoose.connect("mongodb://localhost:27017/museumBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("✅ MongoDB connected successfully!");
        app.listen(5000, () => console.log("🚀 Server running on port 5000"));
    })
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit if MongoDB fails to connect
    });

    
>>>>>>> 6484ae17b4a9ff0e201c7ef0e6c967b3a6921ece

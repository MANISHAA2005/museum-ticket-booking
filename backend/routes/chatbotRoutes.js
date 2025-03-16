const express = require("express");
const { chatbotResponse } = require("../controllers/chatController");

const router = express.Router();

router.post("/ask", chatbotResponse); // Chatbot response

module.exports = router;

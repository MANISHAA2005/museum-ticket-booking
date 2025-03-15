const ollama = require("ollama");

exports.chatbotResponse = async (req, res) => {
    try {
        const { userMessage } = req.body;
        
        // AI chatbot response (Using Ollama Phi-3)
        const response = await ollama.generate('phi-3', { prompt: userMessage });

        res.status(200).json({ botMessage: response });
    } catch (error) {
        res.status(500).json({ error: "Chatbot is currently unavailable" });
    }
};

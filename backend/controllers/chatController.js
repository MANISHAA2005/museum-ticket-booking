const chatbotResponse = async (req, res) => {
    const { message } = req.body;

    let response = { text: "How many tickets?", options: ["1", "2", "3", "4+"] }; // Example dropdown

    if (message.toLowerCase() === "hi") {
        response = { text: "Which museum?", options: ["Art", "History", "Science"] };
    } else if (message.toLowerCase() === "art") {
        response = { text: "How many tickets?", options: ["1", "2", "3", "4+"] };
    } else {
        response = { text: "Confirm booking?", options: ["Yes", "No"] };
    }

    return res.json(response);
};

module.exports = { chatbotResponse };

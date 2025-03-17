import React, { useState, useEffect } from "react";
import "./Chatbot.css"; // Ensure you have Chatbot.css in the same directory
import { FaPaperPlane } from "react-icons/fa"; // Import Paper Plane Icon

const Chatbot = () => {
  // Load messages from localStorage or start with a default bot message
  const [messages, setMessages] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("chatHistory")) || [
        { text: "Hello! How can I assist you?", sender: "bot" },
      ]
    );
  });

  const [input, setInput] = useState("");

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response with a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm just a bot! 😊 How else can I help?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">CHATBOT</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter
        />
        <button onClick={sendMessage}>
          <FaPaperPlane /> {/* Send button with paper plane icon */}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

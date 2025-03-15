import React, { useState } from "react";
import Chatbot from "./Chatbot"; // Assuming you will integrate the chatbot UI component here

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => setIsOpen(!isOpen);

  return (
    <div className="chatbot-icon" onClick={toggleChatbot}>
      {isOpen ? (
        <div className="chatbot-window">
          <Chatbot />
          <button className="close-btn" onClick={toggleChatbot}>
            Close
          </button>
        </div>
      ) : (
        <img src="chatbot-icon.png" alt="Chatbot Icon" />
      )}
    </div>
  );
};

export default ChatbotIcon;

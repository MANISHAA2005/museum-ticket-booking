import React from "react";
import "./Home.css"; // Make sure to create and import the CSS for styling

const Home = () => {
  return (
    <div className="home">
      {/* Landing Section with Background Image */}
      <section
        className="landing"
        style={{ backgroundImage: 'url("/assets/museum.png")' }} // Correct usage of url
      >
        <h1>WELCOME TO MUSEUM TICKET BOOKING</h1>
      </section>

      {/* Explore Museums Section */}
      <section className="explore">
        <h2>Explore Museums</h2>
        <div className="museum-gallery">
          <div className="museum-item">
            <img src="/assets/national_m.jpg" alt="National Museum" />
            <div className="museum-info">
              <p>National Museum</p>
              <p>New Delhi</p>
            </div>
          </div>
          <div className="museum-item">
            <img src="/assets/police_m.jpg" alt="Police Museum" />
            <div className="museum-info">
              <p>Police Museum</p>
              <p>Chennai</p>
            </div>
          </div>
          <div className="museum-item">
            <img src="/assets/seashell_m.jpg" alt="Seashell Museum" />
            <div className="museum-info">
              <p>Seashell Museum</p>
              <p>Mahabalipuram</p>
            </div>
          </div>
          <div className="museum-item">
            <img src="/assets/museum3.png" alt="Albert Hall Museum" />
            <div className="museum-info">
              <p>Albert Hall Museum</p>
              <p>Jaipur</p>
            </div>
          </div>
          <div className="museum-item">
            <img src="/assets/museum6.png" alt="Folklore Museum" />
            <div className="museum-info">
              <p>Folklore Museum</p>
              <p>Mysore</p>
            </div>
          </div>
          <div className="museum-item">
            <img src="/assets/museum4.png" alt="Payana Museum" />
            <div className="museum-info">
              <p>Payana Museum</p>
              <p>Banglore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Icon */}
      <div className="chatbot-icon">
        <img src="/assets/chat_icon.jpg" alt="Chatbot" />
        <span className="tooltip">
          I'm your AI assistant for ticket booking
        </span>
      </div>
    </div>
  );
};

export default Home;

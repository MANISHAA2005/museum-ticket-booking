import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // For styling (customize as needed)

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to the Museum Ticket Booking</h1>
        <p>Explore museums, book tickets, and enjoy your visit!</p>
        <Link to="/popular" className="btn">
          Explore Popular Museums
        </Link>
      </header>
      <section className="features">
        <h2>Features</h2>
        <p>Interactive Chatbot, Ticket Booking, Museum Information & More.</p>
      </section>
    </div>
  );
};

export default Home;

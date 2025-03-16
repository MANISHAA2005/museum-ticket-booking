import React from "react";
import "./Contact.css"; // For styling

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any queries, feel free to reach out to us!</p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

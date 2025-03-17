import React, { useState } from "react";
import "./Header.css"; // Import styles

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const name = e.target.name?.value || "User"; // Get the name (for signup) or use "User"
    setUser(name); // Set logged-in user
    setShowModal(false); // Close modal after login
  };

  return (
    <header className="header">
      <button className="login-btn" onClick={() => setShowModal(true)}>
        {user ? user : "Login / Sign Up"}
      </button>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleLogin}>
              {isSignup && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              )}
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
            </form>
            <p onClick={() => setIsSignup(!isSignup)}>
              {isSignup
                ? "Already have an account? Login"
                : "New user? Sign Up"}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

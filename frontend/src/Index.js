import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css"; // Global styles for the app
import App from "./App"; // Main component
import { BrowserRouter as Router } from "react-router-dom"; // For routing

// Rendering the App component inside the root element of index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

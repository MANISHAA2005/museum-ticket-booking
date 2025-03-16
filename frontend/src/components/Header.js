import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/popular"></Link>
          </li>
          <li>
            <Link to="/helpus"></Link>
          </li>
          <li>
            <Link to="/contact"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

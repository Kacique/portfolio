import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">William Brand</div>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <Link to="contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;

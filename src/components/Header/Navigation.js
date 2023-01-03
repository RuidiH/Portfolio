import { Link } from "react-router-dom";
import React from "react";

const Navigation = (props) => {
  return (
    <header className="header">
      <div className="header__navbar">
        <Link to="/home" className="header__navbar--item">
          Home
        </Link>
        <Link to="/about" className="header__navbar--item">
          About
        </Link>
        <nav className="header__navbar--item">Projects</nav>
        <nav className="header__navbar--item">Interests</nav>
      </div>
    </header>
  );
};

export default Navigation;

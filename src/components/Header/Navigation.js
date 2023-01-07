import { NavLink } from "react-router-dom";
import React from "react";

const Navigation = (props) => {
  return (
    <header className="header">
      <div className="header__navbar">
        <NavLink to="/home" className="header__navbar--item">
          Home
        </NavLink>
        <NavLink to="/about" className="header__navbar--item">
          About
        </NavLink>
        <NavLink to="/projects" className="header__navbar--item">
          Projects
        </NavLink>
        <NavLink to="/interests" className="header__navbar--item">
          Interests
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;

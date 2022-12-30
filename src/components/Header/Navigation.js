import React from "react";

const Navigation = (props) => {
    return (
        <div className="header__navbar">
            <nav className="header__navbar--item">Home</nav>
            <nav className="header__navbar--item">About</nav>
            <nav className="header__navbar--item">Projects</nav> 
            <nav className="header__navbar--item">Interests</nav>
        </div>
    );
};

export default Navigation;
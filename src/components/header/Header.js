import React from "react";
import logo from "../images/olympic2-removebg-preview (1).png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <h1>Best Olympian</h1>
    </nav>
  );
};

export default Header;

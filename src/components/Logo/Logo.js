import React from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2 Logo"
      options={{ max: 25 }}
      style={{ height: 45, width: 45 }}
    >
      <div className="Tilt-inner inner">
        <img src={logo} alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;

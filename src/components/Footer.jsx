import React from "react";
import logo from "../assests/asset 0.png";

export const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="rightContainer">
        <img src={logo} alt="" />
        <p>Copyright © 2024 Game Dev Studio Powered by Game Dev Studio </p>
      </div>
      <div className="middleContainer">
        <h2>Links</h2>

        <span>Home</span>
        <span>Projects</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className="leftContainer">
        <h2>Address</h2>
        <p>104 Doyers St. 9 Arlington Dr. 150 SW Bay Blvd.</p>
        <p>contact@info.com</p>
        <p>555-388-7890</p>
      </div>
    </div>
  );
};

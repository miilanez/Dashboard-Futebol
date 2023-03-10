import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        Dashboard Futebol © Copyright{" "}
        <a
          href="https://gabrielmilanez.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gabriel Milanez
        </a>{" "}
        & Blue Umbrella Inc. 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

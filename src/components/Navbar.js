import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navigation-bar">
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About</a>
          </li>
          <li>
            <a href="/#Projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

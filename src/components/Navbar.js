import React from "react";
import "../styles/Navbar.css"

export default function Navbar(){
    return (
    <div className="navbar">
        <div className="toggleBar"></div>

        <div className="links">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/#About">ABOUT</a></li>
                <li><a href="/#Projects">PROJECTS</a></li>
                <li><a href="/#Contact">CONTACT</a></li>
            </ul>
        </div>
    </div>
    
    );
}
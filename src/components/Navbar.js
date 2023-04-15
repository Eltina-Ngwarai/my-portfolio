import React from "react";
import "../styles/Navbar.css"

export default function Navbar(){
    return (
    <div className="navigation-bar">
        <div className="links">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/#About">ABOUT</a></li>
                <li><a href="/#Projects">PROJECTS</a></li>
            </ul>
        </div>
    </div>
    
    );
}
import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css"

export default function Home(){
    return (
    <div className="Home">
        <div><Navbar/></div>
        <div className="intro">
            <h1>Hi, i'm Eltina Ngwarai</h1>
            <p>Front-end Web Developer</p>
            </div>
        </div> 
    );
}
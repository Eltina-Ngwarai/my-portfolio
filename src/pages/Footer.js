import React from "react"
import "../styles/FooterStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer (){
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="git">
                        <a href="https://github.com/"><FaGithub size={40} style={{color:"#2a0800"}}/></a>
                        </div>
                        <div className="linked-in">
                        <a href="https://www.linkedin.com/in/eltina-ngwarai"><FaLinkedin size={40} style={{color:"#2a0800"}}/></a>
                        </div>
            </div>
                </div>
                

       
    );
}
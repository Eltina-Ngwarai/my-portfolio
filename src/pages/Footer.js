import React from "react"
import "../styles/FooterStyles.css";
import { FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";


export default function Footer (){
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                     <div className="phone">
                        <h4><FaPhone size={20} style={{color:"#2a0800"}}/>
                        +49 162 7717226
                        </h4>
                        </div>
                </div>
                <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#2a0800"}}/>
                        eltinangwarai@gmail.com
                        </h4>
                        </div>
                </div>
                <div className="email">
                        <h4><a href="https://github.com/"><FaGithub size={20} style={{color:"#2a0800"}}/></a>
                        </h4>
                        </div>
            
                <div className="right"></div>

            </div>

       
    )
}
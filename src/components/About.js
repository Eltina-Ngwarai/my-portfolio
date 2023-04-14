import React from "react";
import "../styles/About.css";


export default function About(){
    return (
        <div className="about">
            <div>
                <img id="portrait" src={require('../images/eltie.jpg')} alt="aboutme-pic" />
            </div>
            <div className="bio">
                <h1>About me</h1>
                <p>Coming from a background in accounting, I had previously neven seen myself pursuing a career in Software Development. Then I discovered SheCodes! Now, less than a year later I have spent hundreds of hours learning frontend development with React and i love it. I have built multiple projects along the way and will only be adding more to that list.</p>
            </div>
        </div>
    );
}
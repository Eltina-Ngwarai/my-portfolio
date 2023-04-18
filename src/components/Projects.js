import "../styles/Projects.css";

export default function Projects() {
  return (
    <div id="Projects" className="projects">
      <h1 className="heading">
        <b>Projects</b>
      </h1>
      <div className="container">
        <div className="displayCard">
          <div>
            <img
              id="landscape"
              src={require("../images/dictionary.png")}
              width="400px"
              alt="aboutme-pic"
            />
          </div>
          <div>
            <h1>Dictionary App</h1>
            <div className="description">
              <p>
                A responsive dictionary application that allows the user to
                search any word and get the definitions with pictures.
              </p>
            </div>
            <button className="launcher">
              <a
                href="https://chipper-fairy-acf453.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Launch project
              </a>
            </button>
          </div>
        </div>
        <div className="displayCard">
          <div>
            <h1>Hamburg Landing page</h1>
            <div className="description">
              <p>
                A responsive travel website on desktops, tablets and mobiles.
                Equipped with easy navigation to guide users with built-in
                Google Maps, and links to the airport and the city's public
                transport system.
              </p>
            </div>
            <button className="launcher">
              <a
                href="https://hamburg-landing-page.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Launch project
              </a>
            </button>
          </div>
          <div>
            <img
              id="landscape"
              src={require("../images/hamburg.png")}
              width="400px"
              alt="aboutme-pic"
            />
          </div>
        </div>
        <div className="displayCard">
          <div>
            <img
              id="landscape"
              src={require("../images/weather.png")}
              width="400px"
              alt="aboutme-pic"
            />
          </div>
          <div>
            <h1>React Weather App</h1>
            <div className="description">
              <p>
                A responsive application built with React.The app helps to check
                the weather in various cities in the world.
              </p>

              <button className="launcher">
                <a
                  href="https://whimsical-paprenjak-2dee7c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch project
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

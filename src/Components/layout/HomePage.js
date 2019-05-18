import React, { Component } from "react";
import "../../Utilities/css/homepage.css";
import Typed from "react-typed";
import About from "./About";
import Contacthome from './Contacthome'
import Projects from "./Projects";
import Logo from "../../Utilities/img/logof2.png";
class HomePage extends Component {
  render() {
    const about = {
      title: "Acerca",
      logo: Logo,
      description:
        "Soy un desarrollador web vivendo en Panamá con conocimiento en programación y marketing. Mi pasión es entender como las compañias trabajan y como se pueden mejorar con diferentes tecnologias, actualmente trabajando en proyectos web y marketing"
    };
    return (
      <div>
        <div className="fondo">
          <div className="title">
            <div className="box">
              <h1>Diego Sastoque</h1>
              <h2>
                <Typed
                  strings={["Web Developer", "Analyst", "Self-taught"]}
                  typeSpeed={50}
                  loop
                />
              </h2>
            </div>
          </div>
        </div>

        <About
          className="about"
          titulo={about.title}
          imagen={about.logo}
          descripcion={about.description}
        />
        <Projects className="projects" />
        <Contacthome/>
      </div>
    );
  }
}

export default HomePage;

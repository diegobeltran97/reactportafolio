import React, { Component } from "react";
import Card from "../models/Card";
import "../../Utilities/css/Projects.css";
import imagent from "../../Utilities/img/app.jpg";
import lawyerimage from "../../Utilities/img/lawyer.jpg";
import touraven from "../../Utilities/img/logo.jpg";

export default class projects extends Component {
  render() {
    const projects = [
      {
        title: "Bill A&e",
        image: imagent,
        descripcion:
          "Bill A&E es una facturacion virtual para almacenamiento de datos y reportes mensuales",
        link: "/bill"
      },
      {
        title: "F&C",
        image: lawyerimage,
        descripcion: "Pagina de una firma de abogados trabajando en Panamá",
        link: "/bill"
      },
      {
        title: "Tour Aventuras pty",
        image: touraven,
        descripcion: "Pagina de turismo en Panamá",
        link: "/bill"
      }
    ];
    return (
      <div className="projects">
        <h2>Proyectos</h2>
        <div className="cards">
          {projects.map((project, i) => (
            <Card
              key={i}
              titulo={project.title}
              imagen={project.image}
              descripcion={project.descripcion}
            />
          ))}
        </div>
      </div>
    );
  }
}

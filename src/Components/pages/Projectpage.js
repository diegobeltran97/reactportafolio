import React, { Component } from 'react';
import Project from '../models/Project';
import imagentapp1 from "../../Utilities/img/app.jpg"
import imagentapp2 from "../../Utilities/img/app2.jpg"
import imagentapp3 from "../../Utilities/img/app3.png";
import lawyerimage from "../../Utilities/img/lawyer.jpg";
import touraven from "../../Utilities/img/logo.jpg";


export default class Projectpage extends Component {
    render() {
        const projects = [
            {
              title: "Bill A&e",
              image: [imagentapp1,imagentapp2 , imagentapp3],
              descripcion:
                "Bill A&E es una facturacion virtual para almacenamiento de datos y reportes mensuales",
              client: "Bills A&E",
              link: "https://productsae.herokuapp.com/",
              color: "#292A2C"
              
            },
            {
              title: "F&C",
              image: [lawyerimage],
              descripcion: "Pagina de una firma de abogados trabajando en Panamá",
              link: "/bill",
              color: "#333"
            },
            {
              title: "Tour Aventuras pty",
              image: [touraven],
              descripcion: "Pagina de turismo en Panamá",
              link: "/bill",
              color: "#292A22"
            }
          ];
        
        return (
            <div>
        {projects.map((project, i) => (
            <Project
              key={i}
              titulo={project.title}
              imagen={project.image}
              description={project.descripcion}
              color={project.color}
              link={project.link}
              
            />
          ))}
            </div>
        )
    }
}

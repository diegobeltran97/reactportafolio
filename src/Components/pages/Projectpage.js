import React, { Component } from 'react';
import Project from '../models/Project';

export default class Projectpage extends Component {
    render() {
        const projects = [
            {
              title: "Bill A&e",
              image: [],
              descripcion:
                "Bill A&E es una facturacion virtual para almacenamiento de datos y reportes mensuales",
              link: "/bill"
            },
            {
              title: "F&C",
              image: [],
              descripcion: "Pagina de una firma de abogados trabajando en Panamá",
              link: "/bill"
            },
            {
              title: "Tour Aventuras pty",
              image: [],
              descripcion: "Pagina de turismo en Panamá",
              link: "/bill"
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
              
            />
          ))}
            </div>
        )
    }
}

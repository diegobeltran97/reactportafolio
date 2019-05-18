import React, { Component } from "react";
import Logo from "../../Utilities/img/logof2.png";
import foto from "../../Utilities/img/about.jpg";
import "../../Utilities/css/Mabout.css";

export default class MAbout extends Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="c-description">
            <img src={foto} alt="" width="300px" height="400px" />
            <div className="description">
              <h2>Acerca</h2>
              <p>
                Soy un desarrollador web vivendo en Panamá con conocimiento en
                programación y marketing. Mi pasión es entender como las
                compañias trabajan y como se pueden mejorar con diferentes
                tecnologias, actualmente trabajando en proyectos web y marketing
              </p>
              <p>
                Además de ser un desarrollador web, disfruto la mayor parte de
                mi tiempo haciendo deporte y saliendo con mis amigos ademas de
                ello me gusta leer y tomar cursos sobre temas de mi interés, ir
                a eventos y conocer a diferentes personas.
              </p>
              <p>
                Otros intereses en el campo son el Marketing, Bussiness
                Intelligence, Growth Hacking y diferentes temas que involucran
                el crecimiento de una empresa para el éxito.
              </p>
              <p>
                Por ultimo mi objetivo es trabajar en entornos que a la gente le
                guste crecer en sí mismos y tenga diferentes sueños sobre su
                compañía, para mí esto es lo más importante en una empresa,
                crear valor y creer en ello.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

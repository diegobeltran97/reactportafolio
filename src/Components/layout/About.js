import React, { Component } from "react";
import "../../Utilities/css/About.css";

export default class About extends Component {
  render() {
    const { titulo, descripcion, imagen } = this.props;
    return (
      <div>
        <section className="about container">
          <img src={imagen} alt="logo" width="75px" height="50px" />
          <div className="subtitle">
            <h2>{titulo}</h2>
          </div>
          <p>
            {descripcion} <a href="">.....read more</a>
          </p>
        </section>
      </div>
    );
  }
}

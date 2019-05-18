import React, { Component } from "react";
import "../../Utilities/css/Contacthome.css";
import "../../Utilities/fonts/style.css";
import Logo from "../../Utilities/img/logof2.png";

export default class Contacthome extends Component {
  render() {
    return (
      <div>
        <section className="contacthome">

        <h2>Interesado en un Proyecto ?...</h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <textarea placeholder="Message" name="message" required />
           

            <input type="submit" value="Send" />
           
          </form>
          <ul className="icons">
            <li>
              <a href="" className="icon-github" />
            </li>
            <li><a href="" className="icon-instagram" />
            </li>
            <li><a href="" className="icon-twitter" /></li>

            <li><a href="" className="icon-quill" /></li>
            <li><a href="" className="icon-linkedin" /></li>
          </ul>
          <img src={Logo} alt="logo" width="75px" height="50px" />
        </section>
      </div>
    );
  }
}

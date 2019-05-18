import React, { Component } from "react";
import NavMenu from "./NavMenu";
import logo from "../../Utilities/img/logof2.png";
import "../../Utilities/css/header.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
  render() {
    const { title } = this.props;
    const Links = [
      { label: "Home", to: "/" },
      { label: "Acerca", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Blog", to: "/Blog" },
      { label: "Contacto", to: "/Contact" }
    ];
    return (
      
        <div>
          <header className="heade ">
            <div>
              <div className="logo">
                <img src={logo} width="80px" alt="" />
              </div>
            </div>
            <NavMenu links={Links} />
           
          </header>
        </div>
        
    );
  }
}

Header.defaultProps = {
  title: "Diego Sastoque"
};
export default Header;

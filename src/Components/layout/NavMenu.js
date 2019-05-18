import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../Utilities/css/menusection.css";
import "../../Utilities/js/menusection.js";

class NavMenu extends Component {
  state = {
    off: true
  };
  setToggleClass = () => {
    this.setState({
      off: !this.state.off
    });
  };

  render() {
    const { links } = this.props;
    return (
      <div className={this.state.off ? "menu-section" : "menu-section on"}>
        <div
          onClick={this.setToggleClass}
          className={this.state.off ? "menu-toggle" : "menu-toggle on"}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>

        <nav>
          <ul className={this.state.off ? "hidden" : "m"}>
            {links.map((link, index) => (
              <li key={"mykey" + index}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;

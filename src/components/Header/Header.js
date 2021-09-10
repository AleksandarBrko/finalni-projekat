import React, { Component } from "react";

import "./Header.css";

import PantheonIcon from "./icons/pantheon.png";

class Header extends Component {
  render() {
    return (
      <div className="header-container" id="home">
        <div className="maintitle">
          <img src={PantheonIcon} alt="pantheon" />
          <h1>The Museum of Ancient History</h1>
        </div>
      </div>
    );
  }
}

export default Header;

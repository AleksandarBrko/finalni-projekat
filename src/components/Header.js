import React, { Component } from "react";

import "./Header.css";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <div className="maintitle">
          <h1>The Museum of Ancient History</h1>
        </div>
        <div className="registration">
          <div className="log">
            <a href="">Log In</a>
          </div>
          <div className="reg">
            <a href="">Register</a>
          </div>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Header;

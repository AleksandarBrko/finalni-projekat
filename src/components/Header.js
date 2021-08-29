import React, { Component } from "react";

import "./Header.css";
import Titlebackground from "./images/Titlebackground.jpg";

class Header extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <div className="logreg">
          <div className="reg">
            <div className="login">
              <a href="https://www.google.rs/">Login</a>
            </div>
            <div className="line">|</div>
            <div className="registration">
              <a href="https://www.google.rs/">Registration</a>
            </div>
          </div>
        </div>

        <div className="maintitle">
          <div className="title">
            <h1>Museum of History</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
  
  render() {
    return (
      <div className="menu-container">
        <div className="proba">
          <div className="navbar">
            <Link to="/">Home</Link>
            <a href="#events">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
              <button className="dropbtn">
                Collection
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <h3>Category</h3>
                    <Link to="/egypt">
                      Egyptian and Ancient Near Eastern Art
                    </Link>
                    <Link to="/greece">Greek and Roman Art</Link>
                    <Link to="/asia">Chinese Art</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="logovanje">
              <Link to="/login">Log in</Link>
              <Link to="/register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

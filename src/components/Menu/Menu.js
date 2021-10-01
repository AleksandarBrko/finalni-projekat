import React, { Component } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

class Menu extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    // funkcija uklanja aktivnog usera
    const logout = () => {
      localStorage.setItem("loggedInUser", null);
      window.location.replace("http://localhost:3000");
    };

    return (
      <div className="menu-container">
        <div className="navigation">
          <div className="navbar">
            <a href="#top">Home</a>
            <a href="#events">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
              <button className="dropbtn">
                Collection &nbsp;
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
            {/* ukoliko nema aktivnog usera, renderuj login i signup */}
            {user === null ? (
              <div className="loging">
                <Link to="/login">Log in</Link>
                <Link to="/register">Sign up</Link>
              </div>
            ) : (
              <div className="loging2">
                <div className="username">
                  <strong>{user.user}</strong>
                </div>
                <div className="logout" onClick={() => logout()}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

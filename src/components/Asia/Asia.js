import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Asia.css";
import ApiCollectionAsia from "../ApiCollections/ApiCollectionAsia.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Asia extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    // provjerava da li je user vec logovan
    const logout = () => {
      localStorage.setItem("loggedInUser", null);
      window.location.replace("http://localhost:3000");
    };
    return (
      <div className="asia-container">
        <div navigation>
          <div className="navbar">
            <Link to="/mainpage">Home</Link>
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
            {user === null ? (
              <div className="logovanje">
                <Link to="/login">Log in</Link>
                <Link to="/register">Sign up</Link>
              </div>
            ) : (
              <div className="logovanje2">
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
        <Header />
        <hr />
        <div className="header-culture">
          <div className="title-culture">
            <h1>Chinese art</h1>
          </div>
          <div className="headerImg-asia"></div>
        </div>

        <ApiCollectionAsia />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Asia;

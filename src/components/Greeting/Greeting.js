import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { Link } from "react-router-dom";

class Greeting extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    // provjerava da li je user vec logovan
    const logout = () => {
      localStorage.setItem("loggedInUser", null);
      window.location.replace("http://localhost:3000");
    };
    return (
      <div className="greeting-container">
        <div className="navigation">
          <div className="navbar">
            <Link to="/mainpage">Home</Link>

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
        <Header />
        <hr />

        <div className="greeting-message">
          <div className="greet-title">
            <h1>Thank you for your message.</h1>
          </div>

          <div className="greet-response">We will contact you soon.</div>
        </div>
        <hr />

        <Footer />
      </div>
    );
  }
}

export default Greeting;

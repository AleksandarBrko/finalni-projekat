import React, { Component } from "react";

import "./Register.css";
import Footer from "./Footer";

class Register extends Component {
  render() {
    return (
      <div className="register-container">
        <hr />
        <div className="loginForm-header">REGISTRATION FORM</div>
        <form className="login-form" method="POST" action="sucess">
          <div className="log-user">
            <label>Username</label>
            <input type="text" id="text" />
          </div>
          <div className="log-pass">
            <label>Password</label>
            <input type="text" id="text" />
          </div>
          <button onClick="" id="login">
            Sign Up
          </button>
        </form>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Register;

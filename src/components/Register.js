import React, { Component } from "react";

import "./Register.css";
import Footer from "./Footer";

class Register extends Component {
  render() {
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));

    if (registeredUsers === null) {
      registeredUsers = []
    }

    const registerUser = () => {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let newUser = {
        user: username,
        pass: password
      }

      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    }
 
    return (
      <div className="register-container">
        <hr />
        <div className="loginForm-header">REGISTRATION FORM</div>
        <div className="login-form">
          <div className="log-user">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="log-pass">
            <label>Password</label>
            <input type="text" id="password" />
          </div>
          <button onClick={() => registerUser()}>
            Sign Up
          </button>
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Register;

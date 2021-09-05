import React, { Component } from "react";
import Footer from "./Footer";

import "./Login.css";

class Login extends Component {
  render() {
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));

    if (registeredUsers === null) {
      registeredUsers = []
    }

    const loginUser = () => {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let existingUser = {
        user: username,
        pass: password
      }

      let result = registeredUsers.find((item) => (item.user === existingUser.user && item.pass === existingUser.pass));
      console.log("Index", result)
      // Vraca -1 ukoliko ne nadje
      if (result !== undefined) {
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
        window.location.replace("http://localhost:3000");
      } else {
        alert("Wrong data")
      }
    }

    return (
      <div className="login-container">
        <hr />
        <div className="loginForm-header">LOG IN FORM</div>
        <div className="login-form" method="POST" action="sucess">
          <div className="log-user">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="log-pass">
            <label>Password</label>
            <input type="text" id="password" />
          </div>
          <button onClick={() => loginUser()}>
            Log In
          </button>
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Login.css";

class Login extends Component {
  render() {
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    // ukoliko nema korisnika, niz je prazan
    if (registeredUsers === null) {
      registeredUsers = [];
    }

    const loginUser = () => {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let existingUser = {
        user: username,
        pass: password,
      };

      let result = registeredUsers.find(
        (item) =>
          item.user === existingUser.user && item.pass === existingUser.pass
      );
      console.log("Index", result);
      // Ukoliko nije undefined, user je vec logovan
      if (result !== undefined) {
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
        window.location.replace("http://localhost:3000/mainpage");
      } else {
        alert("Sorry! Wrong info!");
      }
    };

    return (
      <div className="login-container">
        <div></div>
        <Header />
        <hr />
        <div className="loginForm-header">LOG IN FORM</div>
        <div className="login-wrapp">
          <div className="login-form" method="POST" action="sucess">
            <div className="log-user">
              <label>Username</label>
              <input type="text" id="username" />
            </div>
            <div className="log-pass">
              <label>Password</label>
              <input type="text" id="password" />
            </div>
            <div className="log-button">
              <button onClick={() => loginUser()}>Log In</button>
            </div>
          </div>
        </div>
        <div className="question">
          If you dont have an account, please{" "}
          <Link to="/register">Sign up</Link>.
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Login;

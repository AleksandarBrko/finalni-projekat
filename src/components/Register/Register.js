import React, { Component } from "react";

import "./Register.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class Register extends Component {
  render() {
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    // ukoliko nema korisnika, niz je prazan
    if (registeredUsers === null) {
      registeredUsers = [];
    }
    // uzimamo info iz inputa i pravimo novog usera
    const registerUser = () => {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let newUser = {
        user: username,
        pass: password,
      };
      //novog usera ubacujemo u niz
      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      alert("You have successfully registereted!");
      window.location.replace("http://localhost:3000/login");
    };

    return (
      <div className="register-container">
        <Header />
        <hr />
        <div className="loginForm-header">SIGN UP FORM</div>
        <div className="login-form">
          <div className="log-user">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="log-pass">
            <label>Password</label>
            <input type="text" id="password" />
          </div>
          <button onClick={() => registerUser()}>Sign Up</button>
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Register;

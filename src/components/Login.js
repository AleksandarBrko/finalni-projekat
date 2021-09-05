import React, { Component } from "react";
import Footer from "./Footer";

import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <hr />
        <div className="loginForm-header">LOG IN FORM</div>
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
            Log In
          </button>
        </form>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import MainPage from "../MainPage/MainPage";
import Register from "../Register/Register";





class FirstPage extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    // funkcija uklanja aktivnog usera
    const logout = () => {
      localStorage.setItem("loggedInUser", null);
      window.location.replace("http://localhost:3000/");
    };
    return (
      <div className="firstPage-container">
        <Login />
        <div className="tekst">tekst</div>
      </div>
    );
  }
}

export default FirstPage;

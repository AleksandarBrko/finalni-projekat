import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import "./Greeting.css";

class Greeting extends Component {
  render() {
    return (
      <div className="greeting-container">
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

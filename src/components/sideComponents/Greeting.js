import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";

import "./Greeting.css";

class Greeting extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

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

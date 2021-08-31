import React, { Component } from "react";

import "./Main.css";
import Header from "./Header.js";
import Events from "./Events.js";

class Main extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="eventTitle">NEWS</div>
        <Events />
      </div>
    );
  }
}

export default Main;

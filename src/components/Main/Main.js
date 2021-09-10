import React, { Component } from "react";

import "./Main.css";
import Header from "../Header/Header.js";
import Events from "../Events/Events.js";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="main-hr">
          <hr />
        </div>
        <div className="eventTitle" id="events">
          NEWS
        </div>
        <Events />
      </div>
    );
  }
}

export default Main;

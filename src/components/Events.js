import React, { Component } from "react";

import "./Events.css";

class Events extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="events-container">
        <div className="mainEvent"></div>
        <div className="sideEvent">
          <div className="small-event first-image"></div>
          <div className="small-event second-image"></div>
          
        </div>
      </div>
    );
  }
}

export default Events;

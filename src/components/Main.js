import React, { Component } from "react";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="sectionTitle">
          <h2>The wealth of our civilization...</h2>
        </div>
        <div className="main-section">
          <div className="egypt-section">
            <div className="textE">
              <a href="https://en.wikipedia.org/wiki/History_of_Egypt">
                The history of Egypt has been long and wealthy, due to the flow
                of the Nile River with its fertile banks and delta, as well as
                the accomplishments of Egypt's native inhabitants and outside
                influence...
              </a>
            </div>
          </div>
        </div>
        <div className="main-section"></div>
        <div className="main-section"></div>
      </div>
    );
  }
}

export default Main;

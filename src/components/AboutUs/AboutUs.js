import React, { Component } from "react";

import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus-container" id="aboutus">
        <h2>ABOUT US</h2>
        <div className="aboutus-text">
          The Museum was made for explorers and adventurers—it was made for
          people like YOU, with a passion for science and a love of discovery.
          Your support funds groundbreaking research and remarkable education
          programs. And it ensures that our doors stay open for explorers of
          every age.
        </div>
      </div>
    );
  }
}

export default AboutUs;

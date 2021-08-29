import React, { Component } from "react";

import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return <div className="carousel-container">
      <div className="carousel">CAROUSEL</div>
    </div>;
  }
}

export default Carousel;

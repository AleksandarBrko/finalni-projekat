import React, { Component } from "react";

import "./Collection.css";

class Collection extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="collection-container">
        <div className="collection egypt"></div>
        <div className="collection greece"></div>
        <div className="collection asia"></div>
      </div>
    );
  }
}

export default Collection;

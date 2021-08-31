import React, { Component } from "react";

import "./CollectionTitle.css";

class CollectionTitle extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="collectionTitle-container">
        <p>COLLECTION</p>
      </div>
    );
  }
}

export default CollectionTitle;

import React, { Component } from "react";

import "./Asia.css";

class Asia extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="asia-container">
        <div className="headerAsia">
          <div className="titleAsia">
            <h1>ASIA</h1>
          </div>
          <div className="headerImgAsia"></div>
        </div>
        <div className="filterAsia">
          <div className="filterCategory">
            <div className="categoryLabel">CATEGORY</div>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Asia</option>
              <option value="2">Egypt</option>
              <option value="3">Greece</option>
            </select>
          </div>

          <div className="filterCollection">
            <div className="collectionLabel">COLLECTION</div>
            <select class="form-select" aria-label="Default select example">
              <option value="1">CollectionOne</option>
              <option value="2">CollectionTwo</option>
              <option value="3">CollectionThree</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Asia;

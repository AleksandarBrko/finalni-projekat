import React, { Component } from "react";

import "./Greece.css";
import ApiCollectionGreece from "./ApiCollectionGreece.js";

class Greece extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="greece-container">
        <div className="headerGreece">
          <div className="titleGreece">
            <h1>GREECE</h1>
          </div>
          <div className="headerImgGreece"></div>
        </div>
        <div className="filterGreece">
          <div className="filterCategory">
            <div className="categoryLabel">CATEGORY</div>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Greece</option>
              <option value="2">Egypt</option>
              <option value="3">Greece</option>
            </select>
          </div>

          <div className="filterCollection">
            <div className="collectionLabel">COLLECTION</div>
            <select className="form-select" aria-label="Default select example">
              <option value="1">CollectionOne</option>
              <option value="2">CollectionTwo</option>
              <option value="3">CollectionThree</option>
            </select>
          </div>
        </div>
        <ApiCollectionGreece />
      </div>
    );
  }
}

export default Greece;

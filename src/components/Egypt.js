import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./Egypt.css";
import ApiCollection from "./ApiCollection.js";

class Egypt extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="egypt-container">
        <div className="headerEgypt">
          <div className="titleEgypt">
            <h1>EGYPT</h1>
          </div>
          <div className="headerImgEgypt"></div>
        </div>
        <div className="filterEgypt">
          <div className="filterCategory">
            <div className="categoryLabel">CATEGORY</div>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Egypt</option>
              <option value="2">Greece</option>
              <option value="3">Asia</option>
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
          <ApiCollection />
        </div>
      </div>
    );
  }
}

export default Egypt;

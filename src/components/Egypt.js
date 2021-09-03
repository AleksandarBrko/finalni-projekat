import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./Egypt.css";
import ApiCollectionEgypt from "./ApiCollectionEgypt.js";

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
          <div className="header-img-egypt"></div>
        </div>
        <div className="filter-egypt">
          <div className="filter-collection">
            <div className="collection-label">COLLECTION</div>
            <select className="form-select" aria-label="Default select example">
              <option value="1">CollectionOne</option>
              <option value="2">CollectionTwo</option>
              <option value="3">CollectionThree</option>
            </select>
          </div>
          <div className="filter-type">
            <div className="type-label">TYPE</div>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Egypt</option>
              <option value="2">Greece</option>
              <option value="3">Asia</option>
            </select>
          </div>
        </div>
        <ApiCollectionEgypt />
      </div>
    );
  }
}

export default Egypt;

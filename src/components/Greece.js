import React, { Component } from "react";

import "./Greece.css";
import ApiCollectionGreece from "./ApiCollectionGreece.js";
import Header from "./Header";
import Footer from "./Footer";

class Greece extends Component {
  render() {
    return (
      <div className="greece-container">
        <Header />
        <hr/>
        <div className="header-culture">
          <div className="title-culture">
            <h1>GREEK AND ROMAN</h1>
          </div>
          <div className="headerImg-greece"></div>
        </div>
        <div className="filter-culture">
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
        <ApiCollectionGreece />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default Greece;

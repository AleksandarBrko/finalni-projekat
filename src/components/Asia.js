import React, { Component } from "react";

import "./Asia.css";
import ApiCollectionAsia from "./ApiCollectionAsia.js";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

class Asia extends Component {
  render() {
    return (
      <div className="asia-container">
        <div className="stick">
          <Menu />
        </div>
        <Header />
        <hr />
        <div className="header-culture">
          <div className="title-culture">
            <h1>ASIA</h1>
          </div>
          <div className="headerImg-asia"></div>
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
        <ApiCollectionAsia />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Asia;

import React, { Component } from "react";

import "./Egypt.css";
import ApiCollectionEgypt from "./ApiCollectionEgypt.js";
import Footer from "./Footer";
import Header from "./Header";

class Egypt extends Component {
  render() {
    return (
      <div className="egypt-container">
        <Header/>
        <hr/>
        <div className="header-culture">
          <div className="title-culture">
            <h1>EGYPT</h1>
          </div>
          <div className="header-img-egypt"></div>
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
        <ApiCollectionEgypt />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default Egypt;

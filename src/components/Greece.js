import React, { Component } from "react";

import "./Greece.css";
import ApiCollectionGreece from "./ApiCollectionGreece.js";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

class Greece extends Component {
  render() {
    return (
      <div className="greece-container">
        <div className="stick">
          <Menu />
        </div>
        <Header />
        <hr />
        <div className="header-culture">
          <div className="title-culture">
            <h1>Greek and Roman Art</h1>
          </div>
          <div className="headerImg-greece"></div>
        </div>

        <ApiCollectionGreece />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Greece;

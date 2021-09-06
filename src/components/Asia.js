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
            <h1>Chinese art</h1>
          </div>
          <div className="headerImg-asia"></div>
        </div>

        <ApiCollectionAsia />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Asia;

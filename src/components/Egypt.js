import React, { Component } from "react";

import "./Egypt.css";
import ApiCollectionEgypt from "./ApiCollectionEgypt.js";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

class Egypt extends Component {
  render() {
    return (
      <div className="egypt-container">
        <div className="stick">
          <Menu />
        </div>
        <Header />
        <hr />
        <div className="header-culture">
          <div className="title-culture">
            <h1>Egyptian and Ancient Near Eastern Art</h1>
          </div>
          <div className="header-img-egypt"></div>
        </div>

        <ApiCollectionEgypt />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Egypt;

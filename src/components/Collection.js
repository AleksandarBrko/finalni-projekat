import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Collection.css";

class Collection extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="collection-container">
        <Link to="/egypt" className="collection egypt">
          <div className="collection-title">EGYPT</div>
        </Link>
        <Link to="/greece" className="collection greece">
        <div className="collection-title">GREECE/ROME</div>
        </Link>
        <Link to="/asia" className="collection asia">
        <div className="collection-title">CHINA</div>
        </Link>
      </div>
    );
  }
}

export default Collection;

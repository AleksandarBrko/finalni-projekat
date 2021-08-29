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
        <Link to="/egypt" className="collection egypt"></Link>
        <Link to="/greece" className="collection greece"></Link>
        <Link to="/asia" className="collection asia"></Link>
      </div>
    );
  }
}

export default Collection;

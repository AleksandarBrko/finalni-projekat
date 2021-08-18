import React, { Component } from "react";

import Navi from "./Navi";

class Header extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <Navi />
      </div>
    );
  }
}

export default Header;

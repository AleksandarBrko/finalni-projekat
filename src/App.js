import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
    // here we have initial state
    this.state = { loggedon: true };
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;

import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
    // here we have initial state
    this.state = { loggedon: true };
  }

  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

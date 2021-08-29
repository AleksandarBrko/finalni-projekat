import React, { Component } from "react";

import "./App.css";
import Main from "./components/Main";
import Collection from "./components/Collection";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
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
        <Main />
        <Collection />
        <AboutUs />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;

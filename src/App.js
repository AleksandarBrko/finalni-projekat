import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Collection from "./components/Collection";
import CollectionTitle from "./components/CollectionTitle";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Greeting from "./components/sideComponents/Greeting";
import Footer from "./components/Footer";
import Egypt from "./components/Egypt";
import Greece from "./components/Greece";
import Asia from "./components/Asia";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";

class App extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
    // here we have initial state
    this.state = { loggedon: true };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div className="stick">
                <Menu />
              </div>
              <Main />
              <CollectionTitle />
              <Collection />
              <AboutUs />
              <hr />
              <ContactForm />
              <hr />
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/greeting">
              <Greeting />
            </Route>
            <Route path="/egypt">
              <Egypt />
            </Route>
            <Route path="/greece">
              <Greece />
            </Route>
            <Route path="/asia">
              <Asia />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

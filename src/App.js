import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./App.scss";
import Main from "./components/Main/Main";
import Collection from "./components/Collection/Collection";
import CollectionTitle from "./components/CollectionTitle/CollectionTitle";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactForm from "./components/ContactForm/ContactForm";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";
import Egypt from "./components/Egypt/Egypt";
import Greece from "./components/Greece/Greece";
import Asia from "./components/Asia/Asia";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Menu from "./components/Menu/Menu";
import FirstPage from "./components/FirstPage/FirstPage";
import MainPage from "./components/MainPage/MainPage";

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
              <FirstPage>
                <MainPage>
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
                </MainPage>
              </FirstPage>
            </Route>

            <Route path="/firstpage">
              <FirstPage />
            </Route>
            <Route path="/mainpage">
              <MainPage />
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

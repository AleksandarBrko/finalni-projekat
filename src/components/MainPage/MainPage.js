import React, { Component } from "react";

import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs";
import Collection from "../Collection/Collection";
import CollectionTitle from "../CollectionTitle/CollectionTitle";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage-container">
        <Menu />
        <Main />
        <CollectionTitle />
        <Collection />
        <AboutUs />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default MainPage;

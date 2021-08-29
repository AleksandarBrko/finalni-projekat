import React, { Component } from "react";

import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return <div className="contactform-container">
      <div className="contactForm-title"><h2>CONTACT FORM</h2></div>
      <div className="contactrForm-form"></div>
    </div>;
  }
}

export default ContactForm;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ContactForm.css";

class ContactForm extends Component {
  render() {
    return (
      <div className="contactform-container" id="contact">
        <div className="contactForm-title">
          <h2>CONTACT</h2>
        </div>
        <div className="section">
          <div className="contForm">
            <form name="contact" method="POST" action="sucess">
              <div className="nameInput">
                <label for="name">Name</label>
                <input type="text" name="name" id="name " />
              </div>
              <div className="emailInput">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="fieldInput">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <div className="sendMessage">
                <li>
                  <Link to="/greeting">
                    <button className="send-message">Send message</button>
                  </Link>
                </li>
              </div>
            </form>
          </div>
          <div className="hr">
            <hr />
          </div>

          <div className="contactForm-info">
            <div className="info email">
              <h3>Email</h3>
              <a href="mailto:a.bajceta33@gmail.com">a.bajceta33@gmail.com</a>
            </div>
            <div className="info phone">
              <h3>Phone</h3>
              <p>064/051 0451</p>
            </div>
            <div className="info location">
              <h3>Locations</h3>
              <p>Belgrade</p>
              <p>Vienna</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;

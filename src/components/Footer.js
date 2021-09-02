import React, { Component } from "react";

import "./Footer.css";
import Facebook from "./icons/fb.png";
import Instagram from "./icons/insta.png";
import Twitter from "./icons/twitter.png";

class Footer extends Component {
  constructor(props) {
    // use super so we can access "this"
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
        <div className="inner">
          <div className="footIcons">
            <div>
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="instagram" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/home">
                <img src={Twitter} alt="instagram" />
              </a>
            </div>
          </div>

          <div className="copyright">
            <p>© The museum of ancient history</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

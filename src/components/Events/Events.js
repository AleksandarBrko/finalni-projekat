import React, { Component } from "react";

// import "./Events.css";

class Events extends Component {
  render() {
    return (
      <div className="events-container">
        <div className="main-event">
          <a href="https://www.bbc.com/news/world-middle-east-56686448"></a>
          <div className="announce">
            <div className="ann1">News</div>
            <div className="ann2">'Lost golden city' found in Egypt...</div>
          </div>
        </div>
        <div className="side-event">
          <div className="smallEvent-first">
            <a href="https://greekreporter.com/2021/06/06/top-ten-most-spectacular-greek-archaeological-discoveries-of-2020/"></a>
            <div className="announce">
              <div className="ann1">News</div>
              <div className="ann2">Top Ten Most Spectacular Greek...</div>
            </div>
          </div>
          <div className="smallEvent-second">
            <a href="https://www.sixthtone.com/news/1007903/the-mysterious-ancient-city-thats-rewriting-chinese-history"></a>
            <div className="announce">
              <div className="ann1">News</div>
              <div className="ann2">The Mysterious Ancient City...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;

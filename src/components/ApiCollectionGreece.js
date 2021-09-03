import React, { Component } from "react";

import "./ApiCollectionGreece.css";

class ApiCollectionGreece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiError: null,
      isLoaded: false,
      data: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?department=Greek%20and%20Roman%20Art"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            apiError: error,
          });
        }
      );
  }

  render() {
    if (this.state.apiError) {
      return <div>Error: {this.state.apiError.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className="api-loading">Loading...</div>;
    } else {
      return (
        <div className="apiList-container">
          {this.state.data.map((item) => (
            <div className="list-row">
              <div className="row-item title">{item.title}</div>
              <div className="row-item">{item.collection}</div>
              <div className="row-item type">{item.type}</div>
              {/* Ukoliko nema slika, da prikaze samo prazan div i da ne pukne API */}
              {item.images !== null ? (
                <div className="row-item images">
                  <a href={item.images.web.url}>{item.images.web.url}</a>
                </div>
              ) : (
                <div className="row-item images"></div>
              )}
            </div>
          ))}
        </div>
      );
    }
  }
}

export default ApiCollectionGreece;

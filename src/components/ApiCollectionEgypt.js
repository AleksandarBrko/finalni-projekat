import React, { Component } from "react";

import "./ApiCollectionEgypt.css";

class ApiCollectionEgypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      apiError: null,
      isLoaded: false,
      data: [],
      aca: 3
    };
    this.aca = {
      auto: "fiat",
      boja: "crvena",
      broj: 3
    }
  }
  componentDidMount() {
    fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?department=Egyptian%20and%20Ancient%20Near%20Eastern%20Art"
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
    const previousPage = () => {
      this.setState({
        current: this.state.current - 1
      })
      

    };

    if (this.state.apiError) {
      return <div>Error: {this.state.apiError.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className ="api-loading">Loading...</div>;
    } else {
      return (
        <div className="apiList-container">
          <div className="pagination">
            <div onClick={previousPage} className="previous-page" >
              prev
            </div>
            <div className="current-page"></div>
            <div className="next-page">
              <a href="">next</a>
            </div>
          </div>
          <div className="list-row">
            <div className="row-item">Title</div>
            <div className="row-item"></div>
            <div className="row-item"></div>
            <div className="row-item images"></div>
          </div>
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

export default ApiCollectionEgypt;

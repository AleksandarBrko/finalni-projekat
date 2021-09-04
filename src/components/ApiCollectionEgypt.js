import React, { Component } from "react";

import "./ApiCollectionEgypt.css";

class ApiCollectionEgypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      apiError: null,
      isLoaded: false,
      data: [],
      pageList: [],
    };
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
            pageList: result.data.slice(0, 11),
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
      // ne smije stranica da ode na 0 ili minus
      if (this.state.current !== 1) {
        this.setState({
          current: this.state.current - 1,
          pageList: this.state.data.slice(
            (this.state.current - 2) * 12,
            (this.state.current - 2) * 12 + 11
          ),
        });
      }
    };

    const nextPage = () => {
      this.setState({
        current: this.state.current + 1,
        pageList: this.state.data.slice(
          this.state.current * 12,
          this.state.current * 12 + 11
        ),
      });
    };

    if (this.state.apiError) {
      return <div>Error: {this.state.apiError.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className="api-loading">Loading...</div>;
    } else {
      return (
        <div className="apiList-container">
          <div className="pagination">
            <button onClick={previousPage} className="previous-page">
              prev
            </button>

            <div className="current-page">{this.state.current}</div>
            <button onClick={nextPage} className="next-page">
              next
            </button>
          </div>
          <div className="list-row headRow">
            <div className="row-item headRow">Title</div>
            <div className="row-item headRow second">Collection</div>
            <div className="row-item headRow third">Type</div>
            <div className="row-item imagesRow">Image</div>
          </div>
          {this.state.pageList.map((item) => (
            <div className="list-row">
              <div className="row-item title">{item.title}</div>
              <div className="row-item second">{item.collection}</div>
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

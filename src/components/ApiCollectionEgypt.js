import React, { Component } from "react";

import "./ApiCollection.css";

class ApiCollectionEgypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      apiError: null,
      isLoaded: false,
      data: [],
      pageList: [],
      filteredList: [],
      filterActive: false,
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
            pageList: result.data.slice(0, 12),
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
    // ukoliko je filter all, slice-ujemo iz data, pocetna stranica je 1
    const filterCollection = (collection) => {
      if (collection === "all") {
        this.setState({
          pageList: this.state.data.slice(0, 12),
          filterActive: false,
          filteredList: [],
          current: 1,
        });
      } else {
        // u suprotnom iz kolekcije koju smo filtrirali
        const colList = this.state.data;
        const result = colList.filter((item) => item.collection === collection);
        this.setState({
          filteredList: result,
          filterActive: true,
          pageList: result.slice(0, 12),
          current: 1,
        });
      }
    };

    const filterType = (type) => {
      if (type === "all") {
        this.setState({
          pageList: this.state.data.slice(0, 12),
          filterActive: false,
          filteredList: [],
          current: 1,
        });
      } else {
        const colList = this.state.data;
        const result = colList.filter((item) => item.type === type);
        this.setState({
          filteredList: result,
          filterActive: true,
          pageList: result.slice(0, 12),
          current: 1,
        });
      }
    };

    const nextPage = () => {
      // ako je filter aktivan, sjeckamo filtriranu listu umesto cijele liste
      if (this.state.filterActive === true) {
        if (
          this.state.current !== Math.ceil(this.state.filteredList.length / 12)
        ) {
          this.setState({
            current: this.state.current + 1,
            pageList: this.state.filteredList.slice(
              this.state.current * 12,
              this.state.current * 12 + 12
            ),
          });
        }
      } else {
        if (this.state.current !== Math.ceil(this.state.data.length / 12)) {
          this.setState({
            current: this.state.current + 1,
            pageList: this.state.data.slice(
              this.state.current * 12,
              this.state.current * 12 + 12
            ),
          });
        }
      }
    };
    const previousPage = () => {
      // ako je filter aktivan, sjeckamo filtriranu listu umesto cijele liste
      if (this.state.filterActive === true) {
        // ne smije stranica da ode na 0 ili minus
        if (this.state.current !== 1) {
          this.setState({
            current: this.state.current - 1,
            pageList: this.state.filteredList.slice(
              (this.state.current - 2) * 12,
              (this.state.current - 2) * 12 + 12
            ),
          });
        }
      } else {
        if (this.state.current !== 1) {
          this.setState({
            current: this.state.current - 1,
            pageList: this.state.data.slice(
              (this.state.current - 2) * 12,
              (this.state.current - 2) * 12 + 12
            ),
          });
        }
      }
    };

    if (this.state.apiError) {
      return <div>Error: {this.state.apiError.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div className="api-loading">Loading...</div>;
    } else {
      return (
        <div className="apiList-container">
          <div className="filter-culture">
            <div className="filter-collection">
              <div className="collection-label">COLLECTION</div>
              <div className="collection-labelF">filter</div>
              <div className="main-hr">
                <hr />
              </div>
              {/* objekti za filtriranje */}
              <div className="filter-select">
                <div
                  className="filter-option"
                  onClick={() => filterCollection("all")}
                >
                  All
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterCollection("Egypt - Predynastic")}
                >
                  Egypt - Predynastic
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterCollection("Near Eastern Art")}
                >
                  Near Eastern Art
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterCollection("Egypt - Late Period")}
                >
                  Egypt - Late Period
                </div>
              </div>
            </div>
            <div className="filter-type">
              <div className="type-label">TYPE</div>
              <div className="type-labelF">filter</div>
              <div className="main-hr">
                <hr />
              </div>
              <div className="filter-select">
                <div
                  className="filter-option"
                  onClick={() => filterType("all")}
                >
                  All
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterType("Sculpture")}
                >
                  Sculpture
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterType("Metalwork")}
                >
                  Metalwork
                </div>
                <div
                  className="filter-option"
                  onClick={() => filterType("Implements")}
                >
                  Implements
                </div>
              </div>
            </div>
          </div>
          <div className="list-row headRow">
            <div className="row-item headRow">Title</div>
            <div className="row-item headRow second">Collection</div>
            <div className="row-item headRow third">Type</div>
            <div className="row-item imagesRow">Image</div>
          </div>
          {this.state.pageList.map((item) => (
            <div className="list-row data">
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
          <div className="pagination">
            <button onClick={previousPage} className="previous-page">
              prev
            </button>

            <div className="current-page">{this.state.current}</div>
            <button onClick={nextPage} className="next-page">
              next
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ApiCollectionEgypt;

import React, { Component } from "react";

import "./ApiCollection.css";

class ApiCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }
  kolekcija() {
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
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.accession_number} {item.tombstone}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ApiCollection;

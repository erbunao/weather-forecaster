import React, { Component } from 'react';
import 'selectize';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".js-selectize").selectize({
      plugins: ['remove_button'],
      delimiter: ',',
      create: (input) => {
        return {
          value: input,
          text: input
        };
      }
    });
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="js-selectize"
          placeholder="+ Add a city"
        />
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import 'selectize';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  get search_field_items() {
    return this.refs.search.selectize.items;
  }

  componentDidMount() {
    $(".js-selectize").selectize({
      plugins: ['remove_button'],
      delimiter: ',',
      create: (value) => {
        this.props.onCreate(value);
        return { value, text: value };
      },
      onItemRemove: (_) => {
        this.props.onRemove(this.search_field_items);
      }
    });
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          ref="search"
          className="js-selectize"
          placeholder="+ Add a city"
        />
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import 'selectize';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  get selectize_field() {
    return this.refs.search.selectize;
  }

  componentDidMount() {
    $(".js-selectize").selectize({
      plugins: ['remove_button'],
      delimiter: ',',
      create: (value) => {
        return { value, text: value };
      },
      onItemAdd: (value, _) => {
        this.props.onCreate(value);
      },
      onItemRemove: (value) => {
        this.props.onRemove(value);
      },
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.error.city) {
      this.selectize_field.removeOption(this.props.error.city);
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          ref="search"
          className="js-selectize"
          placeholder="Add a city"
        />
      </div>
    );
  }
}

export default Search;

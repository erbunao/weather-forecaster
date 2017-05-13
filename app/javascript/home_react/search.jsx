import React, { Component } from 'react';
import 'selectize';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { cities: [] };

    this.onCreate = this.onCreate.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    $(".js-selectize").selectize({
      plugins: ['remove_button'],
      delimiter: ',',
      create: (value) => {
        this.onCreate(value);
        return { value, text: value };
      },
      onItemRemove: (value) => {
        this.onRemove();
      }
    });
  }

  onCreate(value) {
    this.setState({
      cities: this.state.cities.concat([value]),
    }, this.fetchData);
  }

  onRemove() {
    this.setState({
      cities: this.refs.search.selectize.items,
    }, this.fetchData);
  }

  fetchData() {
    $.ajax({
      url: '/weather_inquiry',
      type: 'GET',
      data: { cities: this.state.cities }
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

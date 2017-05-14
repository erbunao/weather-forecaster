import React, { Component } from 'react';
import Search from './search';
import Cities from './cities';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { cities: [] };

    this.onCreate = this.onCreate.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  onCreate(value) {
    this.setState({
      cities: this.state.cities.concat([value]),
    }, this.fetchData);
  }

  onRemove(cities) {
    this.setState({ cities }, this.fetchData);
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
      <div>
        <div className="navbar">
          <Search
            onCreate={this.onCreate}
            onRemove={this.onRemove}
          />
        </div>
        <div className="section">
          <Cities cities={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default Home;

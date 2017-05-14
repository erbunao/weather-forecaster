import React, { Component } from 'react';
import Search from './search';
import Cities from './cities';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: {},
    };

    this.onCreate = this.onCreate.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  get weather_details() {
    return Object.values(this.state.cities);
  }

  onCreate(value) {
    this.fetchData(value);
  }

  onRemove(city) {
    let cities = Object.assign({}, this.state.cities);
    delete cities[city];
    this.setState({ cities });
  }

  fetchData(city) {
    $.ajax({
      url: '/weather_inquiry',
      type: 'GET',
      data: { city },
      success: (details) => {
        const cities = Object.assign(this.state.cities, { [city]: details });
        this.setState({ cities });
      }
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
          <Cities weather_details={this.weather_details} />
        </div>
      </div>
    );
  }
}

export default Home;

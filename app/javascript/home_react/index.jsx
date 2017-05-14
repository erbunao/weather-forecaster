import React, { Component } from 'react';
import Search from './search';
import Cities from './cities';
import Alert from './alert';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: {},
      error: '',
    };

    this.onCreate = this.onCreate.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  get cities() {
    return Object.keys(this.state.cities);
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
        if (details.cod == "404") {
          this.setState({ error: { city: [city] } });
          console.log('imhere');
          Alert(`${city} can't be recognized.`);
        } else {
          const cities = Object.assign(this.state.cities, { [city]: details });
          this.setState({ cities });
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Search
            cities={this.cities}
            error={this.state.error}
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

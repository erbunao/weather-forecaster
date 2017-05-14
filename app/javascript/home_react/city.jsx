import React from 'react';
import moment from 'moment';
import StringUtils from './string_utils';

function City({ weather_detail }) {
  return (
    <div className="card">
      <div className="card__details">
        <h2 className="card__subheader">
          {weather_detail.name}
        </h2>
        <p className="card__content">
          {moment().format("MMM Do")}
        </p>
      </div>
      <div className="card__main">
        <h2 className="card__header">
          {Math.round(weather_detail.main.temp)}
        </h2>
        <p className="card__content">
          {StringUtils.capitalize(weather_detail.weather[0].description)}
        </p>
      </div>
      <div className="card__subdetails">
        <p className="card__content">
          Humidity: {`${weather_detail.main.humidity}%`}
        </p>
        <p className="card__content">
          Wind: {`${weather_detail.wind.speed}km/h`}
        </p>
      </div>
    </div>
  );
}

export default City;

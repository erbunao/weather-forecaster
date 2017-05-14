import React from 'react';

function City({ city }) {
  return (
    <div className="column-4">
      <div className="card">
        <div>
          <h2 className="card__subheader">Lisbon</h2>
          <p className="card__content">July 4th</p>
        </div>
        <div className="card__main">
          <h2 className="card__header">24</h2>
          <p className="card__content">Few clouds</p>
        </div>
        <div className="card__details">
          <p className="card__content">Humidity: 64%</p>
          <p className="card__content">Wind: 4.6km/h</p>
        </div>
      </div>
    </div>
  );
}

export default City;

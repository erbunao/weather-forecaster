import React from 'react';
import City from './city';

function Cities({ cities }) {
  return (
    <div className="columns">
      {cities.map((city, i) => {
        return <City key={i} city={city}/>;
      })}
    </div>
  );
}

export default Cities;

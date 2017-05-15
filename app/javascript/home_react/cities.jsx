import React from 'react';
import City from './city';

function Cities({ weather_details }) {
  return (
    <div className="columns columns-endless">
      {weather_details.map((weather_detail, i) => {
        return <City key={i} weather_detail={weather_detail}/>;
      })}
    </div>
  );
}

export default Cities;

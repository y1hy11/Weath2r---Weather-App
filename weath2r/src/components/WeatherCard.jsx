import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <div className="temperature">{data.temperature}°</div>
      <div className="condition">{data.condition}</div>
      <div className="details">
        <div>Humidity: {data.humidity}%</div>
        <div>Wind: {data.windSpeed} km/h</div>
      </div>
    </div>
  );
};

export default WeatherCard;

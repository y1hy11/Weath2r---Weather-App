import React from 'react';
import { useWeather } from '../context/WeatherContext';

const CurrentWeather = () => {
  const { weatherData } = useWeather();

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="current-weather">
      <h2>{weatherData.location.name}</h2>
      <div className="weather-info">
        <div className="temperature">
          {weatherData.current.temp_c}°C
        </div>
        <div className="condition">
          {weatherData.current.condition.text}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

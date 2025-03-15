import React from 'react';
import { useWeather } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';

const Forecast = () => {
  const { weatherData } = useWeather();

  if (!weatherData?.forecast) return <div>Loading forecast...</div>;

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {weatherData.forecast.forecastday.map((day) => (
          <WeatherCard key={day.date} data={day} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;

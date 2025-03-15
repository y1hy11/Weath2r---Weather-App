import React from 'react';
import CurrentWeather from '../components/CurrentWeather';
import SearchBar from '../components/SearchBar';
import WeatherMap from '../components/WeatherMap';
import Forecast from '../components/Forecast';

const Home = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <CurrentWeather />
      <WeatherMap />
      <Forecast />
    </div>
  );
};

export default Home;
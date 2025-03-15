import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);

  const value = {
    weatherData,
    setWeatherData,
    location,
    setLocation
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};

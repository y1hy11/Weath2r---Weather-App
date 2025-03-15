import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { getWeatherData } from '../services/api/weatherApi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setWeatherData } = useWeather();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      const data = await getWeatherData(query);
      setWeatherData(data);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

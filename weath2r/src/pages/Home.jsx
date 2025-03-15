import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { getCurrentWeather, getForecast } from '../services/api/weatherApi';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import WeatherMap from '../components/WeatherMap';
import WeatherStats from '../components/WeatherStats';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const { location } = useApp();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const [current, forecast] = await Promise.all([
          getCurrentWeather(location.name),
          getForecast(location.name)
        ]);
        setWeather({ current, forecast });
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!location) return <SearchBar />;

  return (
    <div className="home">
      <SearchBar />
      {weather && (
        <>
          <CurrentWeather data={weather.current} />
          <WeatherStats data={weather.current.current} />
          <Forecast data={weather.forecast} />
          <WeatherMap 
            lat={weather.current.location.lat} 
            lon={weather.current.location.lon} 
          />
        </>
      )}
    </div>
  );
}

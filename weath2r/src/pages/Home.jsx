import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { getCurrentWeather, getForecast } from '@/services/api/weatherApi';
import CurrentWeather from '@/components/weather/CurrentWeather';
import SearchBar from '@/components/weather/SearchBar';
import Forecast from '@/components/weather/Forecast';
import WeatherMap from '@/components/weather/WeatherMap';
import WeatherStats from '@/components/weather/WeatherStats';
import LoadingSpinner from '@/components/LoadingSpinner';

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
          {/* Log data structure for debugging */}
          {console.log('Weather Data:', weather)}
          <Forecast data={weather.forecast?.forecast} />
          <WeatherStats data={weather.current.current} />
          {weather.current.location.lat && weather.current.location.lon && (
            <WeatherMap 
              lat={Number(weather.current.location.lat)} 
              lon={Number(weather.current.location.lon)} 
            />
          )}
        </>
      )}
    </div>
  );
}

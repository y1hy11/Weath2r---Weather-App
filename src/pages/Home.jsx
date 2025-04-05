// Import React hooks
import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';

// Import API services
import { getCurrentWeather, getForecast } from '@/services/api/weatherApi';

// Import weather-related components
import CurrentWeather from '@/components/weather/CurrentWeather';
import SearchBar from '@/components/weather/SearchBar';
import Forecast from '@/components/weather/Forecast';
import WeatherMap from '@/components/weather/WeatherMap';
import WeatherStats from '@/components/weather/WeatherStats';
import LoadingSpinner from '@/components/LoadingSpinner';

// Main Home component that serves as the weather dashboard
export default function Home() {
  
  // Get location from global context
  const { location } = useApp();
  
  // Local state management
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather data when location changes
  useEffect(() => {
    // Skip if no location is selected
    if (!location) return;

    // Async function to fetch both current weather and forecast
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        // Fetch current weather and forecast in parallel
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

  // Conditional rendering based on component state
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!location) return <SearchBar />;

  // Main render Weather dashboard
  return (
    <div className="home">
      {/* Search bar for location selection */}
      <SearchBar />
      
      {/* Weather components only rendered when weather data is available */}
      {weather && (
        <>
          {/* Current weather conditions */}
          <CurrentWeather data={weather.current} />
          
          {/* Development debugging log */}
          {console.log('Weather Data:', weather)}
          
          {/* 5-day forecast */}
          <Forecast data={weather.forecast?.forecast} />
          
          {/* Detailed weather statistics */}
          <WeatherStats data={weather.current.current} />
          
          {/* Weather map only shown if coordinates are available */}
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
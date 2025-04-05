// Import Framer Motion for animations and app context
import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

// CurrentWeather component displays current weather conditions
export default function CurrentWeather({ data }) {
  const { units, setUnits } = useApp();
  
  // Toggle between Celsius and Fahrenheit
  const toggleUnits = () => {
    setUnits(units === 'celsius' ? 'fahrenheit' : 'celsius');
  };
 
  // Format local time and date using the location's timezone
  const localTime = new Date(data.location.localtime);
  const formattedTime = localTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = localTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    // Main container for current weather With animations effects
    <motion.div 
      className="current-weather"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Primary weather information */}
      <div className="current-weather-main">
        {/* Location name and country */}
        <h2>{data.location.name}, {data.location.country}</h2>
        
        {/* Current date and time */}
        <div className="datetime">
          <p className="time">{formattedTime}</p>
          <p className="date">{formattedDate}</p>
        </div>
        
        {/* Temperature display with unit toggle */}
        <div className="current-temp">
          <span className="temp">
            {units === 'celsius' ? data.current.temp_c : data.current.temp_f}°
          </span>
          <button onClick={toggleUnits} className="unit-toggle">
            {units === 'celsius' ? 'C' : 'F'}
          </button>
        </div>
      </div>

      {/* Grid of additional weather details */}
      <div className="weather-details-grid">
        {/* Feels like temperature */}
        <div className="detail-item">
          <span>Feels Like</span>
          <span>
            {units === 'celsius' ? data.current.feelslike_c : data.current.feelslike_f}°
          </span>
        </div>
        
        {/* Humidity percentage */}
        <div className="detail-item">
          <span>Humidity</span>
          <span>{data.current.humidity}%</span>
        </div>
        
        {/* Wind speed */}
        <div className="detail-item">
          <span>Wind</span>
          <span>{data.current.wind_kph} km/h</span>
        </div>
        
        {/* UV index */}
        <div className="detail-item">
          <span>UV Index</span>
          <span>{data.current.uv}</span>
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function CurrentWeather({ data }) {
  const { units, setUnits } = useApp();
  
  const toggleUnits = () => {
    setUnits(units === 'celsius' ? 'fahrenheit' : 'celsius');
  };

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
    <motion.div 
      className="current-weather"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="current-weather-main">
        <h2>{data.location.name}, {data.location.country}</h2>
        <div className="datetime">
          <p className="time">{formattedTime}</p>
          <p className="date">{formattedDate}</p>
        </div>
        <div className="current-temp">
          <span className="temp">{units === 'celsius' ? data.current.temp_c : data.current.temp_f}°</span>
          <button onClick={toggleUnits} className="unit-toggle">
            {units === 'celsius' ? 'C' : 'F'}
          </button>
        </div>
      </div>
      <div className="weather-details-grid">
        <div className="detail-item">
          <span>Feels Like</span>
          <span>{units === 'celsius' ? data.current.feelslike_c : data.current.feelslike_f}°</span>
        </div>
        <div className="detail-item">
          <span>Humidity</span>
          <span>{data.current.humidity}%</span>
        </div>
        <div className="detail-item">
          <span>Wind</span>
          <span>{data.current.wind_kph} km/h</span>
        </div>
        <div className="detail-item">
          <span>UV Index</span>
          <span>{data.current.uv}</span>
        </div>
      </div>
    </motion.div>
  );
}

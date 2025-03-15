import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function CurrentWeather({ data }) {
  const { units } = useApp();

  return (
    <motion.div 
      className="current-weather"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="current-weather-main">
        <h2>{data.location.name}, {data.location.country}</h2>
        <div className="current-temp">
          <span className="temp">{units === 'celsius' ? data.current.temp_c : data.current.temp_f}°</span>
          <span className="unit">{units === 'celsius' ? 'C' : 'F'}</span>
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

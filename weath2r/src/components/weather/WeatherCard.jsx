import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

export default function WeatherCard({ data }) {
  const { units } = useApp();
  const temp = units === 'celsius' ? data.temp_c : data.temp_f;

  return (
    <motion.div 
      className="weather-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="weather-icon">
        <img src={data.condition.icon} alt={data.condition.text} />
      </div>
      <div className="weather-info">
        <h3>{temp}°{units === 'celsius' ? 'C' : 'F'}</h3>
        <p>{data.condition.text}</p>
      </div>
      <div className="weather-details">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind_kph} km/h</p>
      </div>
    </motion.div>
  );
}

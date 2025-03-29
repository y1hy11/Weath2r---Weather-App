import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';

export default function Forecast({ data }) {
  const { units } = useApp();

  // Add null check and logging
  if (!data || !data.forecastday) {
    console.log('Invalid forecast data:', data);
    return null;
  }

  console.log('Forecast data:', data.forecastday);

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {data.forecastday.map((day, index) => (
          <motion.div
            key={day.date}
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="forecast-date">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
            <div className="forecast-icon">
              <img 
                src={day.day.condition.icon.startsWith('//') ? `https:${day.day.condition.icon}` : day.day.condition.icon} 
                alt={day.day.condition.text} 
              />
            </div>
            <div className="forecast-temp">
              <span className="high">
                {units === 'celsius' 
                  ? `${Math.round(day.day.maxtemp_c)}°` 
                  : `${Math.round(day.day.maxtemp_f)}°`}
              </span>
              <span className="low">
                {units === 'celsius'
                  ? `${Math.round(day.day.mintemp_c)}°`
                  : `${Math.round(day.day.mintemp_f)}°`}
              </span>
            </div>
            <div className="forecast-condition">
              {day.day.condition.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

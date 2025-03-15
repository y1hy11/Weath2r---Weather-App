import { motion } from 'framer-motion';
import WeatherCard from './WeatherCard';

export default function Forecast({ data }) {
  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {data.forecast.forecastday.map((day, index) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <WeatherCard 
              data={{
                ...day.day,
                date: new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

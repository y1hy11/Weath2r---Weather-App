import { motion } from 'framer-motion';

export default function WeatherStats({ data }) {
  const stats = [
    { label: 'Precipitation', value: `${data.precip_mm}mm` },
    { label: 'Pressure', value: `${data.pressure_mb}mb` },
    { label: 'Cloud Cover', value: `${data.cloud}%` },
    { label: 'Visibility', value: `${data.vis_km}km` }
  ];

  return (
    <div className="weather-stats">
      <h3>Weather Statistics</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
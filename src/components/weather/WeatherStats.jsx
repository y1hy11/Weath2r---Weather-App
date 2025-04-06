// Import Framer Motion for animations
import { motion } from "framer-motion";

//  WeatherStats component displays detailed weather statistics

export default function WeatherStats({ data }) {
  // Define stats array with labels and formatted values
  const stats = [
    { label: "Precipitation", value: `${data.precip_mm}mm` },
    { label: "Pressure", value: `${data.pressure_mb}mb` },
    { label: "Cloud Cover", value: `${data.cloud}%` },
    { label: "Visibility", value: `${data.vis_km}km` },
  ];

  return (
    // Main container for weather statistics
    <div className="weather-stats">
      <h3>Weather Statistics</h3>

      {/* Grid layout for statistics */}
      <div className="stats-grid">
        {/* Map through stats array to create animated stat items */}
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-item"
            // Animation properties with staggered delay
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Stat label and value display */}
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
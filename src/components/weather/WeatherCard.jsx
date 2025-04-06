// Import necessary dependencies
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

// WeatherCard component displays weather information in a card format
export default function WeatherCard({ data }) {
  // Get temperature unit preference from context
  const { units } = useApp();

  // Calculate temperature based on selected unit
  const temp = units === "celsius" ? data.temp_c : data.temp_f;

  return (
    // Card container with animation effects
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Weather condition icon */}
      <div className="weather-icon">
        <img src={data.condition.icon} alt={data.condition.text} />
      </div>

      {/* Temperature and condition text */}
      <div className="weather-info">
        <h3>
          {temp}°{units === "celsius" ? "C" : "F"}
        </h3>
        <p>{data.condition.text}</p>
      </div>

      {/* Additional weather details */}
      <div className="weather-details">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind_kph} km/h</p>
      </div>
    </motion.div>
  );
}
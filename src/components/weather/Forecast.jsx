// Import necessary dependencies
import { motion } from "framer-motion";
import { useApp } from "@/context/AppContext";

// Forecast component displays a 5-day weather forecast
export default function Forecast({ data }) {
  // Get temperature unit preference from context
  const { units } = useApp();

  // Validate forecast data structure
  if (!data || !data.forecastday) {
    console.log("Invalid forecast data:", data);
    return null;
  }

  // Debug log of forecast data
  console.log("Forecast data:", data.forecastday);

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>

      {/* Grid container for forecast cards */}
      <div className="forecast-grid">
        {/* Map through each day's forecast data */}
        {data.forecastday.map((day, index) => (
          // Animated forecast card with staggered entrance
          <motion.div
            key={day.date}
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Date display */}
            <div className="forecast-date">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </div>

            {/* Weather condition icon */}
            <div className="forecast-icon">
              <img
                src={
                  day.day.condition.icon.startsWith("//")
                    ? `https:${day.day.condition.icon}`
                    : day.day.condition.icon
                }
                alt={day.day.condition.text}
              />
            </div>

            {/* Temperature range display */}
            <div className="forecast-temp">
              {/* High temperature */}
              <span className="high">
                {units === "celsius"
                  ? `${Math.round(day.day.maxtemp_c)}°`
                  : `${Math.round(day.day.maxtemp_f)}°`}
              </span>
              {/* Low temperature */}
              <span className="low">
                {units === "celsius"
                  ? `${Math.round(day.day.mintemp_c)}°`
                  : `${Math.round(day.day.mintemp_f)}°`}
              </span>
            </div>

            {/* Weather condition text */}
            <div className="forecast-condition">{day.day.condition.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
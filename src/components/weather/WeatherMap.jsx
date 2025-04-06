// Import necessary dependencies
import { motion } from "framer-motion";

// WeatherMap component displays an interactive weather map
export default function WeatherMap({ lat, lon }) {
  // Get API key from environment variables
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Construct the OpenWeatherMap URL with parameters
  const mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=12&appid=${API_KEY}`;

  return (
    // Map section container
    <div className="map-section">
      {/* Map container with overflow control */}
      <div className="map-container" style={{ overflow: "hidden" }}>
        {/* OpenWeatherMap iframe */}
        <iframe
          src={mapUrl}
          className="weather-map-iframe"
          title="Weather Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            border: 0,
            marginTop: "-65px",
            height: "calc(100% + 50px)",
          }}
        />
      </div>
    </div>
  );
}
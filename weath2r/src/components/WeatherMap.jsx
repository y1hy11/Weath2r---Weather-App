import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WeatherMap({ lat, lon }) {
  const [activeMap, setActiveMap] = useState('heat');

  // OpenWeatherMap layer configuration with 1km zoom (zoom level 12)
  const mapConfig = {
    heat: {
      url: `https://tile.openweathermap.org/map/temp_new/12/${lat}/${lon}.png?appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      title: 'Temperature Map',
      icon: '🌡️'
    },
    wind: {
      url: `https://tile.openweathermap.org/map/wind_new/12/${lat}/${lon}.png?appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`,
      title: 'Wind Map',
      icon: '💨'
    }
  };

  return (
    <div className="map-section">
      <div className="map-header">
        <h2>Weather Maps</h2>
        <p className="map-description">
          View temperature and wind patterns
        </p>
      </div>
      <div className="map-container">
        <div className="map-tabs">
          {Object.entries(mapConfig).map(([key, { title, icon }]) => (
            <button 
              key={key}
              className={`map-tab ${activeMap === key ? 'active' : ''}`}
              onClick={() => setActiveMap(key)}
            >
              {icon} {title}
            </button>
          ))}
        </div>
        <motion.div 
          className="map-image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            src={`https://openweathermap.org/weathermap?basemap=map&cities=false&layer=${activeMap}_new&lat=${lat}&lon=${lon}&zoom=12`}
            width="100%"
            height="100%"
            frameBorder="0"
            title={mapConfig[activeMap].title}
            className="weather-map-iframe"
            allowFullScreen
          />
        </motion.div>
        <div className="map-legend">
          <span>{mapConfig[activeMap].icon}</span>
          <span>{activeMap === 'heat' ? 'Temperature Scale' : 'Wind Speed Scale'}</span>
        </div>
      </div>
    </div>
  );
}

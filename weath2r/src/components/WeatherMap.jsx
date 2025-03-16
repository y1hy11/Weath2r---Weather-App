import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function WeatherMap({ lat, lon }) {
  const [activeMap, setActiveMap] = useState('heat');
  const { theme } = useApp();

  const heatMapUrl = `https://tile.openweathermap.org/map/temp_new/7/${lat}/${lon}.png?appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`;
  const windMapUrl = `https://tile.openweathermap.org/map/wind_new/7/${lat}/${lon}.png?appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`;

  return (
    <div className="map-section">
      <div className="map-header">
        <h2>Weather Maps</h2>
        <p className="map-description">
          View temperature and wind patterns in your area
        </p>
      </div>
      <div className="map-container">
        <div className="map-tabs">
          <button 
            className={`map-tab ${activeMap === 'heat' ? 'active' : ''}`}
            onClick={() => setActiveMap('heat')}
          >
            🌡️ Heat Map
          </button>
          <button 
            className={`map-tab ${activeMap === 'wind' ? 'active' : ''}`}
            onClick={() => setActiveMap('wind')}
          >
            💨 Wind Map
          </button>
        </div>
        <div className="static-map">
          <img 
            src={activeMap === 'heat' ? heatMapUrl : windMapUrl}
            alt={`${activeMap === 'heat' ? 'Temperature' : 'Wind'} map`}
            className="map-image"
          />
        </div>
      </div>
    </div>
  );
}

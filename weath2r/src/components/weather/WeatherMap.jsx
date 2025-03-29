import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WeatherMap({ lat, lon }) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=12&appid=${API_KEY}`;

  return (
    <div className="map-section">
      <div className="map-container" style={{ overflow: 'hidden' }}>
        <iframe
          src={mapUrl}
          className="weather-map-iframe"
          title="Weather Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ 
            border: 0,
            marginTop: '-65px',
            height: 'calc(100% + 50px)'
          }}
        />
      </div>
    </div>
  );
}
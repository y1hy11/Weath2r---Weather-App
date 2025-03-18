import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WeatherMap({ lat, lon }) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Updated OpenWeatherMap iframe URL with correct parameters
  const mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=12&appid=${API_KEY}`;

  return (
    <div className="map-section">
      <div className="map-container">

        <iframe
          src={mapUrl}
          className="weather-map-iframe"
          title="Weather Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

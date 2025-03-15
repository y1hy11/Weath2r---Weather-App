import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useWeather } from '../context/WeatherContext';
import 'leaflet/dist/leaflet.css';

const WeatherMap = () => {
  const { weatherData } = useWeather();
  const defaultPosition = [51.505, -0.09];
  
  const position = weatherData ? 
    [weatherData.location.lat, weatherData.location.lon] : 
    defaultPosition;

  return (
    <div className="weather-map">
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {weatherData && (
          <Marker position={position}>
            <Popup>
              {weatherData.location.name}
              <br />
              {weatherData.current.temp_c}°C
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;

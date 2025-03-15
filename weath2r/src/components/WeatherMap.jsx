import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function WeatherMap({ lat, lon, zoom = 10 }) {
  useEffect(() => {
    const map = L.map('weather-map').setView([lat, lon], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([lat, lon]).addTo(map);

    return () => map.remove();
  }, [lat, lon, zoom]);

  return <div id="weather-map" className="weather-map"></div>;
}

import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import 'leaflet/dist/leaflet.css';

export default function WeatherMap({ lat, lon, zoom = 10 }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const { theme } = useApp();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function initMap() {
      try {
        const L = (await import('leaflet')).default;
        
        if (!mapInstanceRef.current && mapContainerRef.current) {
          const map = L.map(mapContainerRef.current).setView([lat, lon], zoom);
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          const marker = L.marker([lat, lon]).addTo(map);
          mapInstanceRef.current = { map, marker };

          // Force a resize after initialization
          setTimeout(() => {
            map.invalidateSize();
          }, 100);
        }
      } catch (err) {
        console.error('Map initialization error:', err);
        setError(true);
      }
    }

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.map.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lon, zoom]);

  if (error) {
    return <div className="map-error">Failed to load map</div>;
  }

  return <div ref={mapContainerRef} className="weather-map" />;
}

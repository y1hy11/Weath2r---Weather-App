import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Weath2r</h3>
          <p>Your trusted weather companion</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h4>Data Source</h4>
          <a href="https://www.weatherapi.com" target="_blank" rel="noopener noreferrer">
            WeatherAPI.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Weath2r. All rights reserved.</p>
      </div>
    </footer>
  );
}

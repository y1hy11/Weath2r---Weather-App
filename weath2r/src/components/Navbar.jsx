import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, setTheme, units, setUnits } = useApp();
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleUnits = () => {
    setUnits(units === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-brand">
        <Link to="/">
          <span className="logo">🌦️</span>
          <span className="brand-text">Weath2r</span>
        </Link>
      </div>
      <div className="navbar-links">
        {['/', '/about', '/contact'].map((path) => (
          <Link 
            key={path} 
            to={path}
            className={location.pathname === path ? 'active' : ''}
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
        <button onClick={toggleUnits} className="units-toggle">
          {units === 'celsius' ? '°C' : '°F'}
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.nav>
  );
}

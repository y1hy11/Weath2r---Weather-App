import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useApp();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.nav 
      className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/Logo1.svg" alt="Weath2r Logo" className="logo" />
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
      </div>
        <div className="navbar-controls">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        </div>

    </motion.nav>
  );
}

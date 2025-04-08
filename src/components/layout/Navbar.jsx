// Import necessary dependencies
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { motion } from 'framer-motion';

// Import Logo Img
import Logo from '@/assets/Logo1.svg';

// SVG Icon Components
// Moon icon for dark mode toggle
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z" />
  </svg>
);

// Sun icon for light mode toggle
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// menu icon for mobile navigation
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Main Navbar component
export default function Navbar() {
  // Get theme context and location from hooks
  const { theme, setTheme } = useApp();
  const location = useLocation();

  // State management for navbar visibility and mobile menu
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle theme between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  // Handle navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Toggle mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Animated navbar container with visibility classes
    <motion.nav
      className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Logo/Brand section */}
      <div className="navbar-brand">
        <Link to="/">
          <img src={Logo} alt="Weath2r Logo" className="logo" />
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <MenuIcon />
      </button>

      {/* Mobile Menu Container*/}
      <div className={`navbar-mobile-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="navbar-links">
          {/* Nav Links*/}
          {['/', '/about', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={location.pathname === path ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
        
        {/* Theme Toggle Control*/}
        <div className="navbar-controls">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
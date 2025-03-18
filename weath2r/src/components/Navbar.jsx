import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const { theme, setTheme } = useApp();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
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
        <div className="navbar-links desktop-menu">
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
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={toggleSidebar} className="menu-toggle">
            <MenuIcon />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
            <motion.div
              className="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="sidebar-header">
                <img src="/assets/Logo1.svg" alt="Weath2r Logo" className="logo" />
                <button onClick={toggleSidebar} className="close-button">×</button>
              </div>
              <div className="sidebar-links">
                {['/', '/about', '/contact'].map((path) => (
                  <Link
                    key={path}
                    to={path}
                    className={location.pathname === path ? 'active' : ''}
                    onClick={toggleSidebar}
                  >
                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
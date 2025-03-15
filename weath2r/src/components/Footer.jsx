import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-copyright">
          © 2024 Weather App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

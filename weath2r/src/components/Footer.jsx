import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-section brand">
          <img src="/assets/Logo1.svg" alt="Weath2r Logo" className="footer-logo" />
          <p>Your trusted weather companion, providing accurate forecasts 24/7</p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <div className="footer-contact-info">

            <div className="social-links">
            <a href="https://github.com/Y1hy11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6.0 00-1.3-3.2 4.2 4.2.0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3.0 00-6.2.0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2.0 00-.1 3.2A4.6 4.6.0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>
              </a>
              <a href="https://x.com/y1hy1_1"
                target="_blank" 
                rel="noopener noreferrer" 
                className="twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/yahya-elalaoui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Weath2r. All rights reserved.</p>
        <p>Made With <span>❤</span> By Y1hy1 </p>
      </div>
    </motion.footer>
  );
}

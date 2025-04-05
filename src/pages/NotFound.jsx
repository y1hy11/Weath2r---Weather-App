// Import necessary dependencies
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// NotFound component for 404 error page
export default function NotFound() {
  return (
    // Main container with fade-in and slide-up animation
    <motion.div 
      className="not-found"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 404 heading with scale animation */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        404
      </motion.h1>

      {/* Subheading with slide-up animation */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Page Not Found
      </motion.h2>

      {/* Error message with slide-up animation */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Home link container with slide-up animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/" className="home-link">Return to Home</Link>
      </motion.div>
    </motion.div>
  );
}
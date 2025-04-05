// Import Framer Motion for animations effects
import { motion } from 'framer-motion';

// LoadingSpinner component to display a loading animation
export default function LoadingSpinner() {
  return (
    // Container for the spinner and loading text
    <div className="loading-container">

      {/* Animated spinner using Framer Motion */}
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Loading message */}
      <p>Loading weather data...</p>
    </div>
  );
}
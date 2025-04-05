// Import Framer Motion for animations
import { motion } from "framer-motion";

// About page component with animated sections
export default function About() {
  return (
   
    // Main container with fade-in animation
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
     
      {/* Page header section */}
      <div className="about-header">
        <h1>About Weath2r</h1>
        <p>Your Personal Weather Companion</p>
      </div>

      {/* Grid layout for about sections */}
      <div className="about-grid">
       
        {/* Mission section with slide-in animation from left */}
        <motion.section
          className="about-section mission"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>
            Providing accurate and real-time weather information in an intuitive
            and user-friendly format, helping you make informed decisions about
            your day.
          </p>
        </motion.section>

        {/* Features section with slide-in animation from right */}
        <motion.section
          className="about-section features"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Key Features</h2>
          <ul>
            <li>Real-time weather updates</li>
            <li>5-day weather forecasts</li>
            <li>Interactive weather maps "Pc Version"</li>
            <li>Detailed weather statistics</li>
            <li>Location-based information</li>
          </ul>
        </motion.section>
      </div>
    </motion.div>
  );
}
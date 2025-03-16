import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-header">
        <h1>About Weath2r</h1>
        <p>Your Personal Weather Companion</p>
      </div>

      <div className="about-grid">
        <motion.section 
          className="about-section mission"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>Providing accurate and real-time weather information in an intuitive and user-friendly format, helping you make informed decisions about your day.</p>
        </motion.section>

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
            <li>Interactive weather maps</li>
            <li>Detailed weather statistics</li>
            <li>Location-based information</li>
          </ul>
        </motion.section>

        <motion.section 
          className="about-section tech"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <span>React</span>
            <span>OpenWeather API</span>
            <span>Framer Motion</span>
            <span>Modern CSS</span>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

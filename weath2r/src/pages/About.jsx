import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Weath2r</h1>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>Providing accurate and reliable weather information in a user-friendly format.</p>
        
        <h2>Features</h2>
        <ul className="features-list">
          <li>Real-time weather updates</li>
          <li>5-day weather forecast</li>
          <li>Interactive weather maps</li>
          <li>Detailed weather statistics</li>
          <li>Location-based weather information</li>
        </ul>

        <h2>Data Sources</h2>
        <p>We use WeatherAPI.com for accurate and up-to-date weather information.</p>
      </section>
    </motion.div>
  );
}

// Import necessary dependencies
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Privacy Policy component to display the application's privacy information
export default function PrivacyPolicy() {
  return (
    // Animated container with fade-in effect
    <motion.div 
      className="privacy-policy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page title */}
      <h1>Privacy Policy</h1>

      {/* Main content container */}
      <div className="policy-content">
       
        {/* Introduction section */}
        <section>
          <h2>Introduction</h2>
          <p>Welcome to Weath2r. We are committed to protecting your privacy and providing a secure weather information service.</p>
        </section>

        {/* Data collection policies */}
        <section>
          <h2>Data Collection</h2>
          <p>We collect and process the following data:</p>
          <ul>
            <li>Search history for weather locations</li>
            <li>Device information for optimal service delivery</li>
          </ul>
          <p>This information is used solely for providing accurate weather forecasts and is not stored permanently or shared with third parties.</p>
        </section>
        
        {/* Weather data source information */}
        <section>
          <h2>Weather Data Sources</h2>
          <p>Our weather data is sourced from WeatherAPI.com. The data is refreshed with each request to ensure accuracy. We do not store historical weather data on our servers.</p>
        </section>

        {/* User privacy rights section */}
        <section>
          <h2>Your Privacy Rights</h2>
          <p>You have the following rights:</p>
          <ul>
            <li>Request data deletion</li>
            <li>Opt out of location tracking</li>
            <li>Control browser permissions</li>
          </ul>
        </section>

        {/* Security measures section */}
        <section>
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data. All communications between your browser and our servers are encrypted using SSL/TLS protocols.</p>
        </section>

        {/* Policy update information */}
        <section>
          <h2>Updates to Privacy Policy</h2>
          <p>We may update this privacy policy periodically. Any significant changes will be notified to users through our application.</p>
        </section>

        {/* Contact information section */}
        <section>
          <h2>Contact Information</h2>
          <p>For any privacy-related concerns or questions, please reach out through our <a href='/Contact' className='contact-pp-btn'> Contact Form</a> </p>
        </section>
      </div>
    </motion.div>
  );
}
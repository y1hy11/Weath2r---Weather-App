import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.div 
      className="privacy-policy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Privacy Policy</h1>
      <div className="policy-content">
        <section>
          <h2>Data Collection</h2>
          <p>We collect location data solely for providing weather information. This data is not stored or shared with third parties.</p>
        </section>
        
        <section>
          <h2>Weather Data</h2>
          <p>Weather data is provided by WeatherAPI.com and is refreshed with each request.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You can opt out of location tracking at any time by denying location permissions in your browser.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For privacy concerns, please contact us through our contact form.</p>
        </section>
      </div>
    </motion.div>
  );
}

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <div className="policy-content">
        <section>
          <h2>Data Collection</h2>
          <p>We collect location data solely for providing weather information.</p>
        </section>
        <section>
          <h2>Data Usage</h2>
          <p>Your data is used only to provide weather forecasts and is not shared with third parties.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

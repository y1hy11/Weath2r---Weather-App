import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

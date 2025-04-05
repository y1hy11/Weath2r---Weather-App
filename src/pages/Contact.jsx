// Import necessary dependencies
import { useState } from "react";
import { motion } from "framer-motion";

// Contact page component with form handling, validation and animation effects
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Validate individual fields based
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Please enter your full name" : "";
      case "email":
        return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return value.trim() === "" ? "Please write your message" : "";
      default:
        return "";
    }
  };

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // validate field on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // If there are errors, Display them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      // Handle response from API
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   
    // The Main Container with animation effects
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Page header */}
      <h1>Get in Touch</h1>
      <p className="contact-intro">
        Have questions or suggestions? We'd love to hear from you.
      </p>

      {/* Success message */}
      {submitStatus === "success" && (
        <div className="submit-message success">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {/* Error message */}
      {submitStatus === "error" && (
        <div className="submit-message error">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Contact form */}
      <form noValidate onSubmit={handleSubmit} className="contact-form">
        {/* Name input field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        {/* Message textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type your message here..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`submit-button ${isSubmitting ? "submitting" : ""}`}
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </motion.div>
  );
}
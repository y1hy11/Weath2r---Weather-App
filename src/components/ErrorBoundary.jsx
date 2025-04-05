// Import necessary dependencies
import { Component } from 'react';
import { motion } from 'framer-motion';

// Error Boundary class component to catch and handle runtime errors
class ErrorBoundary extends Component {
  // Initialize state with error tracking properties
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Static method to update state when an error happens
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Lifecycle method called after an error has been thrown
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  // Render method to display either error UI or children components
  render() {
    // If an error occurred, display error message with animation
    if (this.state.hasError) {
      return (
        // Animated error container using Framer Motion
        <motion.div 
          className="error-boundary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
         
          {/* Error message content */}
          <div className="error-content">
            <h1>Oops! Something went wrong</h1>
            <p>{this.state.error?.message || 'An unexpected error occurred'}</p>
           
            {/* Refresh button to reload the page */}
            <button 
              onClick={() => window.location.reload()}
              className="refresh-button"
            >
              Refresh Page
            </button>
          </div>
        </motion.div>
      );
    }

    // If no error, render the child components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
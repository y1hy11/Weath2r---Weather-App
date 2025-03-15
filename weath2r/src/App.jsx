import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/Privacy&Policy';
import TermsConditions from './pages/Terms&Conditions';

function App() {
  return (
    <AppProvider>
      <WeatherProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </WeatherProvider>
    </AppProvider>
  );
}

export default App;
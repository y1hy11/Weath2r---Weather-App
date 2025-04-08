// Core React and routing Imports
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { AppProvider } from "@/context/AppContext.jsx";

// Core Component Imports
import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy Loaded Page Imports
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const PrivacyPolicy = lazy(() => import("@/pages/Privacy&Policy"));

// Styles and Loading Image Imports
const HeadImg = "@/assets/HeadImg.svg";
import "@/styles/App.css";

// PageContainer component handles routing and loading states
function PageContainer() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Add loading effect when route changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  // Show loading spinner while content is loading
  if (isLoading) {
    return (
      <div className="loader-content">
        <img src={HeadImg} alt="Loading" className="loader-logo" />
      </div>
    );
  }

  // Define application routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

//Root application component
function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            <main>
              <Suspense
                fallback={
                  <div className="loader-content">
                    <img src={HeadImg} alt="Loading" className="loader-logo" />
                  </div>
                }
              >
                <div className="background-pattern"></div>
                <PageContainer />
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
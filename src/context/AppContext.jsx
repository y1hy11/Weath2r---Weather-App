// Import necessary React hooks
import { createContext, useContext, useState, useEffect } from "react";

// New context for the application
const AppContext = createContext();

// AppProvider component to wrap the application and provide context
export function AppProvider({ children }) {
  // Theme state with local storage persistence
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    // Default to light theme if no saved preference
    return savedTheme || "light";
  });

  // State for user's location and temperature units
  const [location, setLocation] = useState(null);
  const [units, setUnits] = useState("celsius");

  // Effect to update theme in DOM and local storage when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme === "dark" ? "dark-mode" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Context value object containing all state and setters
  const value = {
    theme,
    setTheme,
    location,
    setLocation,
    units,
    setUnits,
  };

  // Provide context value to children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to consume the AppContext
export function useApp() {
  const context = useContext(AppContext);
  // Throw error if hook is used outside of AppProvider
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
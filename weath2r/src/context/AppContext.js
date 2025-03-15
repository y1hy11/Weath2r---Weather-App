import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [location, setLocation] = useState(null);
  const [units, setUnits] = useState('celsius');

  const value = {
    theme,
    setTheme,
    location,
    setLocation,
    units,
    setUnits
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);

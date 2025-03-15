import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [units, setUnits] = useState('celsius');

  const value = {
    theme,
    setTheme,
    units,
    setUnits
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};

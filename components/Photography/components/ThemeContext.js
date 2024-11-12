// ThemeContext.js

import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

const themes = {
  light: {
    backgroundColor: '#fff', // Light mode background
    color: '#000',           // Light mode text color
  },
  dark: {
    backgroundColor: '#000', // Dark mode background
    color: '#fff',           // Dark mode text color
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: isDarkMode ? themes.dark : themes.light }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

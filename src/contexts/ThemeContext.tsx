/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import {
  lightTheme,
  darkTheme,
  accessibilityTheme,
  dyslexicTheme,
} from '../styles/themes';

interface ThemeContextType {
  theme: string;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  const selectTheme = (themeName: string) => {
    switch (themeName) {
      case 'dark':
        return darkTheme;
      case 'accessibility':
        return accessibilityTheme;
      case 'dyslexic':
        return dyslexicTheme;
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setCurrentTheme }}
    >
      <ThemeProvider theme={selectTheme(currentTheme)}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

import { AppTheme, darkTheme, lightTheme } from '@/theme/theme';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: AppTheme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [theme, setTheme] = useState<AppTheme>(isDark ? darkTheme : lightTheme);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    setTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);
  
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
        {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

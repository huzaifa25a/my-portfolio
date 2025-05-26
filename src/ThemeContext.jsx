import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    const allElements = document.querySelectorAll('*');
    if (darkMode) {
        allElements.forEach((el) => el.classList.add('darkMode'));
        allElements.forEach((el) => el.classList.remove('lightMode'));
      } else {
        allElements.forEach((el) => el.classList.remove('darkMode'));
        allElements.forEach((el) => el.classList.add('lightMode'));
      }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleChange = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div
      onClick={toggleChange}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      <p className="text-[25px]">{darkMode ? '🌙' : '☀️'}</p>
      
      <div className="w-12 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 mb-[6px]">
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
            ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;

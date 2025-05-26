import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeToggle = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const toggleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={toggleChange}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      <p className="text-[25px]">{darkMode ? '🌙' : '☀️'}</p>
      
      <div className={`w-12 h-7 flex items-center ${darkMode ? 'dark:bg-gray-600' : 'bg-gray-300'}  rounded-full p-1 transition-colors duration-300 mb-[6px]`}>
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out
            ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;

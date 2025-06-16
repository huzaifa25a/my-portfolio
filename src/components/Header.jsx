import React, { useContext, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import {ThemeContext} from '../ThemeContext';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const {darkMode} = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [title, setTitle] = useState('');

  const navLinks = ['About', 'Skills', 'Services', 'Projects', 'Contact'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Close menu on selection (mobile)
  };

  return (
    <header className={`fixed w-full z-50 border-b px-4 py-3 flex justify-between items-center ${darkMode ? 'bg-[#393939] shadow-[0_0_2px_#0ff,0_0_3px_#0ff,0_0_5px_#0ff] border-[#0ff]' : 'bg-[#f8f8f8] border-[#b9b9b9] shadow-sm'}`}>
      <div className="text-lg font-bold self-end">
        <Typewriter
          options={{
            strings: [`<a href="/" class="${darkMode ? 'text-shadow-[0_0_1px_#0ff,0_0_1px_#0ff,0_0_3px_#0ff] hover:text-shadow-[0_0_2px_#0ff,0_0_2px_#0ff,0_0_4px_#0ff]' : 'hover:text-shadow-lg'}  style="${darkMode ? 'color:white; !important' : ''}>huzaifa.dev</a>`],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
            delay: 200,
            parseHTML: true
          }}
        />
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
        {navLinks.map((link) => (
          <a
              key={link}
              href={`#${link}`}
              className={`cursor-pointer mr-8 ${darkMode ? activeTab === link ? 'border-b-[2px] border-white text-white' : ''  : activeTab === link ? 'border-b-[2px]' : '' }`}
              onClick={() => handleTabClick(link)}
          >
              {link}
          </a>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button onClick={() => setMenuOpen(!menuOpen)} className={`${darkMode ? 'text-white' : 'text-black'} cursor-pointer`}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`${darkMode ? 'bg-[#393939]' : 'bg-[#f8f8f8]'} fixed top-0 right-0 h-full w-[50%] sm:w-[30%] shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Menu</h2>
          <button onClick={() => setMenuOpen(false)} className={`${darkMode ? 'text-white' : 'text-black'} cursor-pointer`}>
            <X size={26} />
          </button>
        </div>
        <nav className={`flex flex-col space-y-6 mt-6 p-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          {navLinks.map((link) => (
            <a
                key={link}
                href={`#${link}`}
                className={`cursor-pointer ${activeTab === link ? 'font-bold' : 'font-light'}`}
                onClick={() => handleTabClick(link)}
            >
                {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Optional: Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed bg-black inset-0 opacity-30 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;

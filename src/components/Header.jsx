import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [activeTab, setActiveTab] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Services', 'Projects', 'Contact'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false); // Close menu on selection (mobile)
  };

  return (
    <header className="bg-[#f8f8f8] dark:bg-[#1a1a1a] fixed w-full z-50 shadow-sm border-b border-[#b9b9b9] px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-black dark:text-white">Huzaifa.dev</div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
        {navLinks.map((link) => (
          <a
              key={link}
              href={`#${link}`}
              className={`cursor-pointer mr-8 ${activeTab === link ? 'border-b-[2px]' : ''}`}
              onClick={() => handleTabClick(link)}
          >
              {link}
          </a>
        ))}
        {/* <ThemeToggle /> */}
      </nav>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-4">
        {/* <ThemeToggle /> */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black dark:text-white cursor-pointer">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] sm:w-[30%] bg-[#f8f8f8] dark:bg-[#1a1a1a] shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-black">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-black cursor-pointer">
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-6 p-4 text-black">
          {navLinks.map((link) => (
            <a
                key={link}
                href={`#${link}`}
                className={`cursor-pointer ${activeTab === link ? 'font-semibold' : ''}`}
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

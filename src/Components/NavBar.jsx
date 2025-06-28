import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg'; // Adjust the path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' : 'bg-white py-5'
      }`}
    >
      {/* Navbar container */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="SNPSTECH Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-gray-800 tracking-wide">SNPSTECH</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
          <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-green-600 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white w-full px-4 sm:px-6 pt-4 pb-6 space-y-4 text-gray-700 text-sm font-medium">
          <a href="#home" className="block hover:text-green-600" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-green-600" onClick={toggleMenu}>About</a>
          <a href="#services" className="block hover:text-green-600" onClick={toggleMenu}>Services</a>
          <a href="#contact" className="block hover:text-green-600" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

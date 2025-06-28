import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-castleton_green-500 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} SNPSTECH Solution LLP. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#home" className="hover:text-sea_green-600">Home</a>
          <a href="#services" className="hover:text-sea_green-600">Services</a>
          <a href="#contact" className="hover:text-sea_green-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Navbar.jsx
import React from 'react';
import { personalInfo } from '../data';

const Navbar = () => {
  return (
    <header className="bg-gray-800/70 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-white text-2xl font-bold hover:text-cyan-400 transition-colors">
          {personalInfo.name}
        </a>
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
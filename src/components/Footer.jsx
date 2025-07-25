// src/components/Footer.jsx
import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 border-t border-gray-700">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="mb-2">
            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-white transition-colors">LinkedIn</a>
            <span className="opacity-50">|</span>
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-white transition-colors">GitHub</a>
             <span className="opacity-50">|</span>
            <a href={`mailto:${personalInfo.contact.email}`} className="mx-2 hover:text-white transition-colors">Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Dibuat dengan React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/Hero.jsx
import React from 'react';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-cyan-400">
          {personalInfo.title}
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10">
          {personalInfo.summary}
        </p>
        <div className="flex justify-center gap-4 mb-10">
          <a
            href={personalInfo.cv}
            download
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl"><FaLinkedin /></a>
          <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl"><FaGithub /></a>
          <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-400 hover:text-white text-3xl"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
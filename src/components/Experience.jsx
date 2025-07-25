// src/components/Experience.jsx
import React from 'react';
import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Pengalaman Kerja</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-cyan-700 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              </div>
              <div className="absolute left-1/2 w-5 h-5 bg-cyan-500 rounded-full z-10 transform -translate-x-1/2"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                  <p className="text-cyan-400 font-semibold">{exp.period}</p>
                  <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm text-left">
                    {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
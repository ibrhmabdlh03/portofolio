// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data';
import { FaLink } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Proyek Pilihan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg p-6 flex flex-col hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-cyan-900 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
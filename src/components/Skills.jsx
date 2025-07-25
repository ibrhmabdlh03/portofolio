// src/components/Skills.jsx
import React from 'react';
import { skills } from '../data';

const SkillCategory = ({ title, items }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <span key={skill} className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Keahlian Teknis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Networking" items={skills.networking} />
          <SkillCategory title="Cloud" items={skills.cloud} />
          <SkillCategory title="Security" items={skills.security} />
          <SkillCategory title="Programming & Tools" items={skills.programming_tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
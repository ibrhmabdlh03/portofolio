// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-gray-900 text-gray-200 font-sans tracking-wide">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      {/* <Courses /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
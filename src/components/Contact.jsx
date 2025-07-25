// src/components/Contact.jsx
import React from 'react';
import { personalInfo } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Saya terbuka untuk diskusi mengenai peluang kerja, proyek kolaborasi, atau sekadar bertukar pikiran tentang teknologi.
        </p>
        <a 
          href={`mailto:${personalInfo.contact.email}`}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
        >
          Kirim Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
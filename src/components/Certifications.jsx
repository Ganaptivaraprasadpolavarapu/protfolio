import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';

const certifications = [
  'Generative AI – Oracle',
  'Azure AI Fundamentals – Microsoft',
  'Java Masterclass 2025 – Udemy',
  'AWS Academy Cloud Foundations – Amazon Web Services',
  'AWS Academy Cloud Architecting – Amazon Web Services'
];

const Certifications = () => {
  return (
    <div className="certs-container">
      <h2 className="certs-title">Certifications</h2>
      <div className="certs-scroll">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {cert}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

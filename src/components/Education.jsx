import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      year: '2022 – 2026',
      degree: 'B.Tech – Computer Science and Technology',
      institution: 'Sri Vasavi Engineering College, Tadepalligudem',
      percentage: 'CGPA – 9.03 / 82%',
    },
    {
      year: '2020 – 2022',
      degree: 'Intermediate – MPC',
      institution: 'Sasi Junior College, Tadepalligudem',
      percentage: '94% (940 Marks)',
    },
    {
      year: '2015 – 2020',
      degree: '10th Class',
      institution: 'ZP High School, Jagannadhapuram',
      percentage: '90% (542 Marks)',
    },
  ];

  return (
    <div className="edu-container">
      <h2 className="edu-title">Education</h2>
      <div className="timeline">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="percentage">{edu.percentage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

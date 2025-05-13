import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const skillsData = {
  'Programming Languages': ['Java', 'C++', 'Python', 'C'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Django', 'React.js'],
  'Databases': ['MySQL', 'SQLite'],
  'Tools & Platforms': ['Git', 'VS Code', 'Linux', 'Windows'],
  'Other Skills': ['Problem Solving', 'Data Structures and Algorithms']
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, items], index) => (
          <motion.div
            key={index}
            className="skills-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="skills-category">{category}</h3>
            <ul className="skills-list">
              {items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

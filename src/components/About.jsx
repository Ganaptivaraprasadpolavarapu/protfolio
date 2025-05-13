import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
        I am a driven and enthusiastic Computer Science Engineering student with a strong passion for learning and growing in a collaborative environment. I am eager to contribute my knowledge and skills to support the team, solve real-world challenges, and deliver meaningful results. I am committed to continuous improvement and always give my best to every opportunity I undertake.
      </p>
    </motion.div>
  );
};

export default About;

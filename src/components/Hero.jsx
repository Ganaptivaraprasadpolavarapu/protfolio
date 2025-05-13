import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin } from 'lucide-react';
import './Hero.css';
import profileImage from '../assets/profile.jpg'; // Adjust the path if needed

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.img
        src={profileImage}
        alt="Profile"
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="highlight">Ganapati Vara Prasad</span>
      </motion.h1>

      <motion.h2
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Computer Science Student | Full Stack Developer | Tech Enthusiast
      </motion.h2>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="mailto:prasadpolavarapu56@gmail.com" className="btn">
          <Mail className="icon" /> Contact
        </a>
        <a
          href="https://www.linkedin.com/in/ganapati-vara-prasad-polavarapu-a936b4349"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <Linkedin className="icon" /> LinkedIn
        </a>
        <a href="/resume.pdf" download className="btn">
          <Download className="icon" /> Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

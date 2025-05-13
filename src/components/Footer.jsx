import React from 'react';
import './Footer.css';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">© {new Date().getFullYear()} Ganapati Vara Prasad</p>
      <div className="footer-icons">
        <a href="mailto:prasadpolavarapu56@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ganapati-vara-prasad-polavarapu-a936b4349"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

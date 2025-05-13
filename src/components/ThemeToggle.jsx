import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ThemeToggle;

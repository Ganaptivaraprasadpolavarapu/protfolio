import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Scholarship Recommendation System',
    role: 'Project Lead',
    technologies: 'Python, Django, SQLite, HTML/CSS',
    description:
      'Led development of a web-based platform matching students with scholarships based on qualifications and financial background. Features include student-donor interaction, real-time notifications, and application tracking.',
  },
  // You can add more projects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Tech:</strong> {project.technologies}</p>
            <button className="view-btn" onClick={() => setSelectedProject(project)}>
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p><strong>Role:</strong> {selectedProject.role}</p>
            <p><strong>Tech:</strong> {selectedProject.technologies}</p>
            <p className="modal-description">{selectedProject.description}</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

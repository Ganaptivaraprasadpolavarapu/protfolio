import React from 'react';
import './Achievements.css';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const achievements = [
  'Participated in Smart India Hackathon and two internal college-level hackathons.',
  'Active member of the Black Box Club, contributing to peer learning and tech discussions.',
  'Served as an NSS Instructor, successfully teaching juniors for two semesters.',
  'Selected for the NMMS Scholarship during school for academic excellence.',
  'Appointed as the Class Representative throughout B.Tech, showcasing leadership and coordination skills.',
  'Student Coordinator for department-level college fest, handling event planning and execution.',
  'Participated in various zonal-level sports and college cricket tournaments.',
  'Organized multiple technical events in the department to promote student engagement and innovation.',
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2 className="achievements-title">Achievements & Activities</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CheckCircle className="icon" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

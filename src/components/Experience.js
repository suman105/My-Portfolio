import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import './Experience.css'; // Create this file for styling

const Experience = () => {
  const experiences = [
    {
      icon: <FaCode />,
      title: 'Full Stack Web Developer Intern - IITTDM Kancheepuram University',
      duration: 'May 2022 - Aug 2022',
      details: [
        'Led a team of 4 in developing web modules for a university portal using PHP to help 150+ employees manage data.',
        'Used Bootstrap and CSS to create responsive designs for 10 web pages, integrating AJAX for real-time communication.',
        'Designed RESTful APIs to manage employee data and optimized MySQL connectivity using PHP’s MySQLi extension.',
        'Applied hierarchical role-based access control with inheritance to secure 5 access levels and enable granular permissions.',
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="experience-icon">{experience.icon}</div>
            <div className="experience-content">
              <h3>{experience.title}</h3>
              <p className="duration">{experience.duration}</p>
              <ul>
                {experience.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
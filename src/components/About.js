import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUser, FaLightbulb } from 'react-icons/fa';
import './About.css'; // Create this file for styling

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <motion.div
        className="about-card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Hi, I'm <strong>Suman Majari</strong>, a passionate web developer with experience in building modern web applications using React JS. I love solving problems and creating user-friendly interfaces.
          </motion.p>
          <div className="about-icons">
            <motion.div
              className="icon-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <FaCode className="icon" />
              <p>Web Development</p>
            </motion.div>
            <motion.div
              className="icon-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <FaUser className="icon" />
              <p>User-Centric Design</p>
            </motion.div>
            <motion.div
              className="icon-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <FaLightbulb className="icon" />
              <p>Problem Solving</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
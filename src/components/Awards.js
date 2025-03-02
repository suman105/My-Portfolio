import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCertificate, FaGraduationCap, FaMedal } from 'react-icons/fa';
import './Awards.css'; // Create this file for styling

const Awards = () => {
  const awards = [
    {
      icon: <FaTrophy />,
      text: 'Secured 1st rank at Texas Tech University by Solving 500+ Problems on GeeksforGeeks.',
    },
    {
      icon: <FaAward />,
      text: 'Honored with the highly Competitive Computer Science Department Scholarship, granted for outstanding academic achievements and a demonstrated commitment to excellence in the field.',
    },
    {
      icon: <FaGraduationCap />,
      text: 'Awarded Graduate School Competitive Scholarship for the first year of my Master’s at Texas Tech University.',
    },
    {
      icon: <FaCertificate />,
      text: 'Received a Certificate of Excellence in Design and Innovation for my team’s exceptional academic project.',
    },
    {
      icon: <FaMedal />,
      text: 'Secured the Foundation for Excellence (FFE) scholarship for all four years of my Bachelor’s as a top student.',
    },
  ];

  return (
    <motion.section
      id="awards"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Awards & Achievements</h2>
      <div className="awards-container">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="award-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="award-icon">{award.icon}</div>
            <p className="award-text">{award.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Awards;
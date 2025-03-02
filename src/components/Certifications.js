import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Certifications</h2>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <li>React JS Certification - [Issuer]</li>
        <li>JavaScript Certification - [Issuer]</li>
      </motion.ul>
    </motion.section>
  );
};

export default Certifications;
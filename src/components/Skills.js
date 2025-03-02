import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaGithub, FaNpm, FaLinux, FaWindows, FaApple, FaLaptopCode,
} from 'react-icons/fa';
import { SiCplusplus, SiC, SiPhp, SiMysql, SiPostgresql, SiMongodb, SiVisualstudiocode, SiPycharm, SiJira, SiGeeksforgeeks } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'C', icon: <SiC color="#00599C" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'PHP', icon: <SiPhp color="#777BB4" /> },
    { name: 'SQL', icon: <FaDatabase color="#003B57" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
    { name: 'PyCharm', icon: <SiPycharm color="#21D789" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub color="black" /> },
    { name: 'JIRA', icon: <SiJira color="#0052CC" /> },
    { name: 'Linux', icon: <FaLinux color="black" /> },
    { name: 'Windows', icon: <FaWindows color="#0078D6" /> },
    { name: 'Mac OS', icon: <FaApple color="gray" /> },
    { name: 'VS Code', icon: <FaLaptopCode color="#007ACC" /> },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Skills</h2>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

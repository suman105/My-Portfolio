import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './Projects.css'; // Create this file for styling

const Projects = () => {
  const projects = [
    {
      title: 'Gym Reservation Bot',
      technologies: ['Python', 'Selenium', 'Google Cloud Console'],
      duration: 'Jan. 2021 - Apr. 2021',
      details: [
        'Developed an automatic bot using Python and Google Cloud Console to register myself for a timeslot at my school gym.',
        'Implemented Selenium to create an instance of Chrome in order to interact with the correct elements of the web page.',
        'Created a Linux virtual machine to run on Google Cloud so that the program is able to run everyday from the cloud.',
        'Used Cron to schedule the program to execute automatically at 11 AM every morning so a reservation is made for me.',
      ],
      github: 'https://github.com/suman105/REST-API-Using-Node', // Add GitHub link
    },
    {
      title: 'MediaHUB',
      technologies: ['Node', 'MongoDB', 'Express', 'JavaScript'],
      duration: 'Jan. 2024 - Apr. 2024',
      details: [
        'Developed a web app for exploring digital media using Express.js and Node.js with responsive design and real-time data through RESTful APIs.',
        'Built an efficient asynchronous comment system with AJAX for threading and file uploads using Multer middleware.',
        'Implemented robust secure user authentication with Passport.js, enabling personalized ratings and session management.',
        'Designed a scalable MongoDB database infrastructure with Mongoose to support CRUD operations, deployed on Heroku.',
      ],
      github: 'https://github.com/suman105/MediaHUB', // Add GitHub link
    },
    {
      title: 'MST Visualizer and Time Analysis',
      technologies: ['Visualisation', 'Python', 'DSA'],
      duration: 'Aug. 2023 - Nov. 2023',
      details: [
        'Implemented Borůvka’s, Reverse-Delete, Prim’s, and Kruskal’s MST algorithms in Python, optimizing Union-Find with path compression and rank heuristics for efficient edge selection.',
        'Performed extensive benchmarking of the 4 MST algorithms across dense, sparse, and average graph types using timeit, validating empirical complexity through 1000+ iterations.',
        'Built a robust MST visualization framework with NetworkX and Matplotlib, emphasizing critical edges and weight distributions for insightful algorithm comparison.',
      ],
      github: 'https://github.com/suman105/MST_TimeAnalysis_MultipleAlgorithms', // Add GitHub link
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{project.title}</h3>
            <p className="technologies">{project.technologies.join(' | ')}</p>
            <p className="duration">{project.duration}</p>
            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
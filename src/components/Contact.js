import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import profilePhoto from "../assets/contact.jpg"; // Replace with your photo path
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value; // Get name from the form
    const email = e.target.email.value;
    const message = e.target.message.value;
    // Handle form submission (e.g., send email or save to database)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Thank you for your message, " + name + "!");
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <FaEnvelope /> Send Message
            </button>
          </form>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/suman-majjari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://github.com/suman105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github" />
            </a>
            <a
              href="https://leetcode.com/u/SumanMajjari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode className="social-icon leetcode" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/sumanmajjari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GeeksforGeeks"
            >
              <SiGeeksforgeeks className="social-icon geeksforgeeks" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
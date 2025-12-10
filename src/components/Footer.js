import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <motion.a
              href="#hero"
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              MF<span>.</span>
            </motion.a>
            <p className="footer-tagline">
              Building technology that is fast, simple, and useful.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <motion.a
                href="https://github.com/mustafafaham"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#818cf8' }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="mailto:Mustafafaham79@gmail.com"
                whileHover={{ y: -3, color: '#818cf8' }}
              >
                <FiMail />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mustafa Faham. Built with <FiHeart className="heart" /> and React
          </p>
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ y: -3, backgroundColor: '#818cf8' }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

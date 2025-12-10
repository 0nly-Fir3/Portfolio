import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import Typewriter from './Typewriter';
import '../styles/Hero.css';

const Hero = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const name = 'Mustafa Faham';
  const typewriterTexts = [
    'I build games with millions of players.',
    'I create custom operating systems.',
    'I design beautiful user experiences.',
    'I craft 3D animations and visuals.',
    'I develop web platforms and tools.',
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <h1 className="hero-title">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className={char === ' ' ? 'space' : ''}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="subtitle-item">Developer</span>
          <span className="subtitle-divider">|</span>
          <span className="subtitle-item">Designer</span>
          <span className="subtitle-divider">|</span>
          <span className="subtitle-item">System Builder</span>
        </motion.div>

        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Typewriter texts={typewriterTexts} speed={80} deleteSpeed={40} pauseTime={2500} />
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          My work ranges from mobile game development to web platforms, 
          low-level assembly projects, and security-focused product concepts.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="cta-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/0nly-Fir3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -3 }}
            title="GitHub"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mustafa-faham-66051b33a"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, y: -3 }}
            title="LinkedIn"
          >
            <FiLinkedin />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;

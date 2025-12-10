import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBriefcase, FiCode, FiMonitor, FiUsers, FiShield } from 'react-icons/fi';
import '../styles/Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      icon: <FiMonitor />,
      title: 'Game Developer',
      company: 'Drive Zone Online',
      description: 'Worked on gameplay systems, user experience flows, and performance optimizations for a global audience of 50M+ players.',
      color: '#f43f5e',
    },
    {
      icon: <FiCode />,
      title: 'System Designer & Experimenter',
      company: 'Independent',
      description: 'Built assembly-based OS prototypes and modified existing lightweight operating systems like MenuetOS.',
      color: '#8b5cf6',
    },
    {
      icon: <FiBriefcase />,
      title: 'Web Developer',
      company: 'Freelance',
      description: 'Designed and deployed multiple platforms, including App Store V2 and various tools and templates.',
      color: '#06b6d4',
    },
    {
      icon: <FiShield />,
      title: 'Product & Brand Concept Designer',
      company: 'Guardian Angel Project',
      description: 'Created the Guardian Angel brand, product, and marketing flow from scratch—combining design, UX, and storytelling.',
      color: '#10b981',
    },
    {
      icon: <FiUsers />,
      title: 'School Ambassador',
      company: 'Educational Institution',
      description: 'Represented school in guiding students and visitors, supporting leadership and communication skills development.',
      color: '#f59e0b',
    },
    {
      icon: <FiAward />,
      title: 'Certified IT Specialist',
      company: 'Professional Certification',
      description: 'Completed IT specialist training with focus on systems, networks, and software fundamentals.',
      color: '#ec4899',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              style={{ '--accent-color': exp.color }}
            >
              <div className="timeline-marker">
                <motion.div
                  className="marker-icon"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {exp.icon}
                </motion.div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <motion.div
                className="timeline-content"
                whileHover={{ 
                  x: 10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="content-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="experience-tagline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Developer with a passion for performance, design, and innovation.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Experience;

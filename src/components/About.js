import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const highlights = [
    {
      icon: <FiCode />,
      title: 'Full-Stack Development',
      description: 'Building web applications from frontend to backend',
    },
    {
      icon: <FiCpu />,
      title: 'System-Level Thinking',
      description: 'Understanding hardware, OS, and low-level operations',
    },
    {
      icon: <FiLayers />,
      title: 'Creative Design',
      description: 'UI/UX, 3D modeling, and brand identity creation',
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I am an <span className="highlight">18-year-old developer</span> with a strong focus on 
              programming, system design, and creative technology.
            </p>
            <p>
              My experience covers everything from mobile games with millions of players to 
              experimental operating systems and modern web applications. I enjoy solving complex 
              problems and turning ideas into functional products—whether it is a custom OS, 
              a 3D-modelled security device, a web tool, or a high-performance user interface.
            </p>
            <p>
              I am constantly learning and improving, working across multiple domains including 
              UI/UX, hardware logic, 3D visualization, and automation.
            </p>
            <motion.blockquote
              className="about-quote"
              whileHover={{ x: 10, borderLeftColor: '#818cf8' }}
            >
              My goal is to build technology that is fast, simple, and useful.
            </motion.blockquote>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(99, 102, 241, 0.5)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="about-stats" variants={itemVariants}>
          <div className="stat-item">
            <motion.span
              className="stat-number"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              50M+
            </motion.span>
            <span className="stat-label">Game Downloads</span>
          </div>
          <div className="stat-item">
            <motion.span
              className="stat-number"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              10+
            </motion.span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <motion.span
              className="stat-number"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
            >
              5+
            </motion.span>
            <span className="stat-label">Technologies Mastered</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

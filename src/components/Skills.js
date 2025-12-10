import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiMonitor, FiCpu, FiPenTool, 
  FiTerminal, FiDatabase, FiZap 
} from 'react-icons/fi';
import { 
  SiJavascript, SiPython, SiHtml5, SiGithub 
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', name: 'All', icon: <FiZap /> },
    { id: 'programming', name: 'Programming', icon: <FiCode /> },
    { id: 'game', name: 'Game Dev', icon: <FiMonitor /> },
    { id: 'systems', name: 'Systems', icon: <FiCpu /> },
    { id: 'design', name: 'Design', icon: <FiPenTool /> },
  ];

  const skills = [
    // Programming
    { name: 'JavaScript', icon: <SiJavascript />, category: 'programming', level: 90 },
    { name: 'Python', icon: <SiPython />, category: 'programming', level: 85 },
    { name: 'HTML/CSS', icon: <SiHtml5 />, category: 'programming', level: 95 },
    { name: 'Assembly', icon: <FiTerminal />, category: 'programming', level: 70 },
    { name: 'Git & GitHub', icon: <SiGithub />, category: 'programming', level: 85 },
    { name: 'REST APIs', icon: <FiDatabase />, category: 'programming', level: 80 },
    
    // Game Development
    { name: 'Gameplay Logic', icon: <FiCode />, category: 'game', level: 90 },
    { name: 'Vehicle Dynamics', icon: <FiMonitor />, category: 'game', level: 85 },
    { name: 'Game UI/UX', icon: <FiPenTool />, category: 'game', level: 88 },
    { name: 'Optimization', icon: <FiZap />, category: 'game', level: 82 },
    
    // Systems
    { name: 'Custom PC Builds', icon: <FiCpu />, category: 'systems', level: 90 },
    { name: 'BIOS Configuration', icon: <FiTerminal />, category: 'systems', level: 75 },
    { name: 'OS Customization', icon: <FiMonitor />, category: 'systems', level: 80 },
    { name: 'Bootloaders', icon: <FiDatabase />, category: 'systems', level: 70 },
    
    // Design
    { name: 'UI/UX Prototyping', icon: <FiPenTool />, category: 'design', level: 85 },
    { name: '3D Modeling', icon: <FiMonitor />, category: 'design', level: 75 },
    { name: 'Animation', icon: <FiZap />, category: 'design', level: 80 },
    { name: 'Brand Identity', icon: <FiPenTool />, category: 'design', level: 82 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 200 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
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
          <span className="section-number">02</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(99, 102, 241, 0.5)'
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="skills-tagline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>Combining UI, systems, and creativity to build next-generation experiences.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

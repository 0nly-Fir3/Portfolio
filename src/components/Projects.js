import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import Model3DViewer from './Model3DViewer';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: 'Drive Zone Online',
      category: 'Game Development',
      description: 'A high-performance open-world driving game with over 50 million downloads.',
      longDescription: 'Contributed to core gameplay systems, performance optimization, and user-experience improvements. Demonstrates large-scale production capability and game system understanding.',
      tech: ['Game Development', 'Vehicle Dynamics', 'UI/UX', 'Optimization'],
      image: '/drivezone.jpg',
      color: '#f43f5e',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.drivezone.car.race.game&hl=en',
      featured: true,
      highlights: [
        '50M+ downloads worldwide',
        'Core gameplay systems development',
        'Performance optimization',
        'User experience improvements'
      ]
    },
    {
      id: 2,
      title: 'Guardian Angel',
      category: 'Product Design',
      description: 'A personal safety device concept designed for quick emergency response.',
      longDescription: 'A comprehensive project combining product design, UX, and storytelling. Includes full product concept, brand identity, 3D device model with sharp-edge aesthetic, internal mechanism animation, and minimalist website design.',
      tech: ['3D Modeling', 'Brand Identity', 'UI/UX', 'Marketing'],
      image: '/gaurdianangel.png',
      color: '#8b5cf6',
      featured: true,
      modelUrl: '/guardian-angel.glb',
      highlights: [
        'Full product concept and brand identity',
        '3D device model with sharp-edge aesthetic',
        'Internal mechanism animation',
        'Minimalist black & white website design',
        'Marketing script and ad storyboard'
      ]
    },
    {
      id: 3,
      title: 'Custom Assembly Mini OS',
      category: 'Systems',
      description: 'A lightweight operating system developed from scratch in assembly.',
      longDescription: 'This project showcases system-level thinking and understanding of low-level operations. Focus areas include boot process, memory management basics, simple UI components, and high-efficiency minimalism.',
      tech: ['Assembly', 'OS Development', 'Memory Management', 'Bootloaders'],
      image: '/asm.png',
      color: '#06b6d4',
      githubUrl: 'https://github.com/mustafafaham',
      featured: true,
      highlights: [
        'Custom boot process implementation',
        'Memory management basics',
        'Simple UI components',
        'High-efficiency minimalism'
      ]
    },
    {
      id: 4,
      title: 'App Store V2',
      category: 'Web Development',
      description: 'A web-based application marketplace built with a category-driven design.',
      longDescription: 'Features a clean custom UI with a red-themed interface, category cards linking to dynamic product pages. Designed to evolve into a more interactive system later.',
      tech: ['JavaScript', 'HTML/CSS', 'UI Design', 'Web Development'],
      image: '/appstorev2.png',
      color: '#ef4444',
      githubUrl: 'https://github.com/mustafafaham',
      highlights: [
        'Clean custom UI design',
        'Red-themed interface',
        'Category-driven navigation',
        'Dynamic product pages'
      ]
    },
    {
      id: 5,
      title: 'Unicode Emoji Analyzer',
      category: 'Web Tool',
      description: 'A web utility that compares user input to the full Unicode emoji range.',
      longDescription: 'Identifies missing emojis and excludes flags by default. Useful for developers building emoji-complete apps or keyboards.',
      tech: ['JavaScript', 'Unicode', 'Web Development', 'Developer Tools'],
      image: '😀',
      color: '#f59e0b',
      githubUrl: 'https://github.com/mustafafaham',
      highlights: [
        'Full Unicode emoji range comparison',
        'Missing emoji identification',
        'Flag exclusion option',
        'Developer-focused utility'
      ]
    },
    {
      id: 6,
      title: 'Toyota Supra Breakdown',
      category: '3D Animation',
      description: 'A detailed animated breakdown of a Toyota Supra\'s structure.',
      longDescription: 'Work included object modeling, layer-by-layer animation, explosion diagram style, and precision timing. Demonstrates visual engineering and technical storytelling.',
      tech: ['3D Modeling', 'Animation', 'Visual Design', 'Technical Art'],
      image: '/supra.PNG',
      color: '#10b981',
      modelUrl: '/supra.glb',
      highlights: [
        'Detailed object modeling',
        'Layer-by-layer animation',
        'Explosion diagram style',
        'Precision timing'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-bg-orb"></div>
      <motion.div
        className="projects-container"
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
          <span className="section-number">03</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 }
              }}
              style={{ '--accent-color': project.color }}
            >
              <div className="project-image">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="project-emoji" />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="project-featured">Featured</span>}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{ '--accent-color': selectedProject.color }}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX />
                </button>
                
                <div className="modal-header">
                  {selectedProject.image.startsWith('/') ? (
                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-emoji" />
                  ) : (
                    <span className="modal-emoji">{selectedProject.image}</span>
                  )}
                  <div>
                    <span className="modal-category">{selectedProject.category}</span>
                    <h3 className="modal-title">{selectedProject.title}</h3>
                  </div>
                </div>

                <p className="modal-description">{selectedProject.longDescription}</p>

                {selectedProject.modelUrl && (
                  <Model3DViewer 
                    modelUrl={selectedProject.modelUrl} 
                    projectName={selectedProject.title}
                  />
                )}

                <div className="modal-highlights">
                  <h4>Highlights</h4>
                  <ul>
                    {selectedProject.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  <div className="modal-tech">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="modal-actions">
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub /> View Code
                      </motion.a>
                    )}
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          className="projects-tagline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          From OS kernels to 3D breakdowns, I create technology with purpose.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Projects;

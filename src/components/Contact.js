import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiGithub, FiMapPin, FiCheck, FiLinkedin } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:Mustafafaham79@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-bg-glow"></div>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">05</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Build Something Together</h3>
            <p>
              If you want to collaborate, have questions, or need technical input, 
              feel free to reach out. I'm always open to discussing new projects, 
              creative ideas, or opportunities.
            </p>

            <div className="contact-details">
              <motion.a
                href="https://github.com/0nly-Fir3"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10, color: '#818cf8' }}
              >
                <FiGithub />
                <span>github.com/0nly-Fir3</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/mustafa-faham-66051b33a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10, color: '#818cf8' }}
              >
                <FiLinkedin />
                <span>linkedin.com/in/mustafa-faham-66051b33a</span>
              </motion.a>

              <motion.div
                className="contact-item"
                whileHover={{ x: 10, color: '#818cf8' }}
              >
                <FiMapPin />
                <span>Available for Remote Work</span>
              </motion.div>
            </div>

            <motion.div
              className="contact-tagline"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <blockquote>
                I build systems that are simple, fast, and functional.
              </blockquote>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: '#818cf8' }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: '#818cf8' }}
              />
            </div>

            <div className="form-group">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, borderColor: '#818cf8' }}
              />
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitted ? (
                <>
                  <FiCheck /> Message Sent!
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

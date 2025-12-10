import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (isPaused) {
        setTimeout(() => setIsPaused(false), pauseTime);
        return;
      }

      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isPaused ? pauseTime : isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className="typewriter">
      {displayText}
      <motion.span
        className="typewriter-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;

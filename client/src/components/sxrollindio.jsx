// components/ScrollIndicator.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 to-blue-500 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    />
  );
};

export default ScrollIndicator;

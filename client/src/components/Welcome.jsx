// components/WelcomeParallax.js
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import HyperpixelAnimation from './hacker';

const WelcomeParallax = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 280]);
  const y2 = useTransform(scrollY, [0, 300], [0, -280]);
  const x1 = useTransform(scrollY, [0, 300], [0, 200]);
  const x2 = useTransform(scrollY, [0, 300], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
      {/* Background Layers */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', y: y1, opacity }}
      />
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', y: y2, opacity }}
      />
      
      <motion.div
        className="relative flex flex-col items-center justify-center h-full text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500"
          initial={{ y: -600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
            <HyperpixelAnimation value="WELCOME TO ZIHAD'S BLOG" delay={2000} />

            </motion.h1>

        <motion.p
          className="text-2xl font-medium text-gray-300 mt-4"
          initial={{ y: 600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          
          Explore articles, tutorials, and more!
        </motion.p>


      </motion.div>

      {/* Animated Blocks */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-80"
        style={{ x: x1, y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-500 rounded-full opacity-80"
        style={{ x: x2, y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-green-500 rounded-full opacity-80"
        style={{ x: x1, y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-80"
        style={{ x: x2, y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      />
    </div>
  );
};

export default WelcomeParallax;

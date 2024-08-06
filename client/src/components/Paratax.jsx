// components/NewsletterSubscription.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setSubscribed(true);
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        {subscribed ? 'Thank you for subscribing!' : 'Subscribe to our Newsletter'}
      </h2>
      {!subscribed && (
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white md:mr-4 mb-4 md:mb-0"
          />
          <button
            type="submit"
            className="bg-white text-purple-500 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default NewsletterSubscription;

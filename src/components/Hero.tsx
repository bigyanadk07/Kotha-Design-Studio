import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-screen flex items-center justify-center bg-sage-50"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-900/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          कोठा Design Studio
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-white mb-8"
        >
          Bringing Nepali heritage into modern living spaces
        </motion.p>
        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-sage-600 text-white px-8 py-3 rounded-lg flex items-center mx-auto space-x-2 hover:bg-sage-700 transition-colors"
        >
          Explore Our Work <ArrowRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};
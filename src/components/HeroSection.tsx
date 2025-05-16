import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToNextSection = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const nextSection = document.getElementById('tier-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative"
      style={{ background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 60%, #90E0EF 100%)' }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 hero--grain"></div>
      
      {/* Logo */}
      <img 
        src="/wildcabo-logo-white.svg" 
        alt="Wild Cabo Tours" 
        className="absolute top-8 left-10 w-12"
      />
      
      <div className="text-center px-4 md:px-8 max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8 whitespace-pre-line"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {"Fill Every Deck.\nGrow Every Vessel."}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          A complete web ecosystem purpose-built for Wild Cabo Tours.
        </motion.p>
        
        <motion.p 
          className="text-white/80 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 14, letterSpacing: 0.3 }}
        >
          25+ vessels • 300 K annual guests • 4.9⭐ average review
        </motion.p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white mb-3 text-lg">↓ See the Concepts</p>
        <ArrowDown 
          className="w-8 h-8 text-white cursor-pointer"
          onClick={scrollToNextSection}
          style={{ animation: 'bounceOnce 1s ease-out 1 forwards' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;

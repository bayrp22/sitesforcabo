import React from 'react';
import { ArrowDown } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback for motion elements
  motion = {
    h1: 'h1',
    p: 'p',
  };
}

const HeroSection: React.FC = () => {
  const scrollToNextSection = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const nextSection = document.getElementById('tier-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Use regular React components if Framer Motion isn't available
  const isFramerAvailable = typeof motion !== 'object' || motion.h1 !== 'h1';
  
  // Motion props, only applied if Framer is available
  const headlineProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2 }
  } : {};
  
  const sublineProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.35 }
  } : {};
  
  const proofStripProps = isFramerAvailable ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5 }
  } : {};

  // Component selection based on availability
  const Headline = isFramerAvailable ? motion.h1 : 'h1';
  const Paragraph = isFramerAvailable ? motion.p : 'p';

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative"
      style={{ background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 60%, #90E0EF 100%)' }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 hero--grain"></div>
      
      {/* Company logo in top-left corner with SWS text */}
      <div className="absolute top-6 left-6 flex items-center">
        <img 
          src="/img/company-logo.svg" 
          alt="Company Logo" 
          className="w-14 h-auto"
        />
        <span 
          className="text-white text-xl font-semibold ml-2"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          SWS
        </span>
      </div>
      
      <div className="text-center px-4 md:px-8 max-w-4xl flex flex-col items-center">
        {/* Logo - moved inside the text container */}
        <img 
          src="/img/wild-cabo-logo.jpeg" 
          alt="Wild Cabo Tours" 
          className="w-24 h-auto rounded-md mb-8"
        />
        
        <Headline 
          className="text-4xl md:text-6xl font-bold text-white mb-8 whitespace-pre-line"
          {...headlineProps}
        >
          {"Fill Every Deck.\nGrow Every Vessel."}
        </Headline>
        
        <Paragraph 
          className="text-xl md:text-2xl text-white/90 mb-10"
          {...sublineProps}
        >
          A complete web ecosystem purpose-built for Wild Cabo Tours.
        </Paragraph>
        
        <Paragraph 
          className="text-white/80 mb-12"
          style={{ fontSize: 14, letterSpacing: 0.3 }}
          {...proofStripProps}
        >
          25+ vessels • 300 K annual guests • 4.9⭐ average review
        </Paragraph>
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

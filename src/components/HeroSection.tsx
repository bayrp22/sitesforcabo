import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToNextSection = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const nextSection = document.getElementById('tier-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-gradient-to-r from-cabo-turquoise to-cabo-blue">
      <div className="text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
          Scale Your Fleet's Revenue. One Site at a Time.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          A Proposal for Wild Cabo's Web Ecosystem
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-white mb-3 text-lg">View Tiers Below</p>
        <ArrowDown 
          className="w-8 h-8 text-white animate-bounce cursor-pointer" 
          onClick={scrollToNextSection} 
        />
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('tier-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-cabo-turquoise to-cabo-blue">
      <div className="text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Elevate Your Digital Presence with Wild Cabo
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          A comprehensive microsite ecosystem tailored for maximum engagement and seamless user experience
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#proposal-summary" className="cta-button w-full md:w-auto">
            View Complete Proposal
          </a>
          <Button 
            variant="outline" 
            className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30 w-full md:w-auto"
            onClick={scrollToNextSection}
          >
            Explore Options
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white" onClick={scrollToNextSection} />
      </div>
    </div>
  );
};

export default HeroSection;

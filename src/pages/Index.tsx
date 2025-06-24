import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';

const Index = () => {
  return (
    <div className="h-full">
      <main className="main-container">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        
        {/* Future SWS sections will be added here */}
      </main>
    </div>
  );
};

export default Index;

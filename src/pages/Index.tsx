import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import PricingSection from '@/components/PricingSection';
import LocalTeamSection from '@/components/LocalTeamSection';

const Index = () => {
  return (
    <div className="h-full">
      <main className="main-container">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <LocalTeamSection />
        
        {/* Future SWS sections will be added here */}
      </main>
    </div>
  );
};

export default Index;

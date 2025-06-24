import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import PricingSection from '@/components/PricingSection';
import LocalTeamSection from '@/components/LocalTeamSection';
import OfferGate from '@/components/OfferGate';
import AdaptiveForm from '@/components/AdaptiveForm';
import Confirmation from '@/components/Confirmation';

const Index = () => {
  const [path, setPath] = useState<"site" | "nosite" | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handlePathSelection = (selectedPath: "site" | "nosite") => {
    setPath(selectedPath);
  };

  return (
    <div className="h-full">
      <main className="main-container">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <LocalTeamSection />
        <OfferGate onPathSelected={handlePathSelection} />
        <AdaptiveForm path={path} onStatusChange={setFormStatus} />
        {formStatus === "success" && path && (
          <Confirmation path={path} />
        )}
      </main>
    </div>
  );
};

export default Index;

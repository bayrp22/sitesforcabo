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
  const [submittedFormData, setSubmittedFormData] = useState<{ name: string; email: string } | null>(null);

  const handlePathSelection = (selectedPath: "site" | "nosite") => {
    setPath(selectedPath);
  };

  const handleFormSubmit = (data: { name: string; email: string }) => {
    setSubmittedFormData(data);
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
        <AdaptiveForm path={path} onStatusChange={setFormStatus} onFormSubmit={handleFormSubmit} />
        {formStatus === "success" && path && (
          <Confirmation path={path} initialFormData={submittedFormData} />
        )}
      </main>
    </div>
  );
};

export default Index;

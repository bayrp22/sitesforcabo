import React from 'react';
import HeroSection from '@/components/HeroSection';
import TierShowcaseSection from '@/components/TierShowcaseSection';
import UXFlowSection from '@/components/UXFlowSection';
import SiteDemoSection from '@/components/SiteDemoSection';
import PricingTableSection from '@/components/PricingTableSection';
import DeliveryTimelineSection from '@/components/DeliveryTimelineSection';
import SeoPerformanceSection from '@/components/SeoPerformanceSection';
import ConceptFunnels from '@/sections/ConceptFunnels';
import ChooseMatrix from '@/sections/ChooseMatrix';
import DemoGallery from '@/sections/DemoGallery';
import ProposalSummary from '@/sections/ProposalSummary';

const Index = () => {
  return (
    <div className="h-full">
      <main className="snap-container">
      <HeroSection />
      
      <ConceptFunnels />
      
      <TierShowcaseSection />
      
      <DemoGallery />
      
      <SeoPerformanceSection />
      
      <UXFlowSection />
      
      <ChooseMatrix />
      
      <DeliveryTimelineSection />
      
      <PricingTableSection />
      
      <ProposalSummary />
      </main>
    </div>
  );
};

export default Index;

import React from 'react';
import HeroSection from '@/components/HeroSection';
import TierShowcaseSection from '@/components/TierShowcaseSection';
import UXFlowSection from '@/components/UXFlowSection';
import SiteDemoSection from '@/components/SiteDemoSection';
import PricingTableSection from '@/components/PricingTableSection';
import SeoPerformanceSection from '@/components/SeoPerformanceSection';
import ConceptFunnels from '@/sections/ConceptFunnels';
import DemoGallery from '@/sections/DemoGallery';
import ProposalSummary from '@/sections/ProposalSummary';
import DeliveryTimelineSection from '@/sections/DeliveryTimelineSection';

const Index = () => {
  return (
    <div className="h-full">
      <main className="main-container">
      <HeroSection />
      
      <ConceptFunnels />
      
      <TierShowcaseSection />
      
      <DemoGallery />
      
      <SeoPerformanceSection />
      
      <UXFlowSection />
      
      <DeliveryTimelineSection />
      
      <PricingTableSection />
      
      <ProposalSummary />
      </main>
    </div>
  );
};

export default Index;

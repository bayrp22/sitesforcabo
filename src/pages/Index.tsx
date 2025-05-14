import React from 'react';
import HeroSection from '@/components/HeroSection';
import TierShowcaseSection from '@/components/TierShowcaseSection';
import UXFlowSection from '@/components/UXFlowSection';
import SiteDemoSection from '@/components/SiteDemoSection';
import PricingTableSection from '@/components/PricingTableSection';
import DeliveryTimelineSection from '@/components/DeliveryTimelineSection';
import ProposalSummarySection from '@/components/ProposalSummarySection';
import SeoPerformanceSection from '@/components/SeoPerformanceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="h-full">
      <main className="snap-container">
      <HeroSection />
      
      <TierShowcaseSection />
      
      <UXFlowSection />
        
        <SeoPerformanceSection />
      
      <SiteDemoSection />
      
      <PricingTableSection />
      
      <DeliveryTimelineSection />
      
      <ProposalSummarySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

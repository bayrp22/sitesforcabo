
import React from 'react';
import SectionContainer from './SectionContainer';
import { Book, CircleCheck } from 'lucide-react';

const benefits = [
  "Complete microsite ecosystem with integrated user experience",
  "Mobile-first responsive design for all devices",
  "Scalable architecture for future growth and expansion",
  "Comprehensive analytics to measure performance",
  "Ongoing support and maintenance options",
  "SEO-optimized for better visibility and search ranking"
];

const ProposalSummarySection: React.FC = () => {
  return (
    <SectionContainer id="proposal-summary" bgColor="bg-cabo-gradient">
      <div className="text-center text-white mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Book className="w-6 h-6" />
          <h2 className="text-3xl md:text-4xl font-bold">Proposal Summary</h2>
        </div>
        <p className="text-xl max-w-3xl mx-auto">
          A comprehensive microsite ecosystem designed to elevate your brand and drive engagement
        </p>
      </div>
      
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CircleCheck className="w-6 h-6 text-cabo-blue mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Let's transform your digital presence with our comprehensive microsite ecosystem. Our team is ready to bring your vision to life with our expertise in design and development.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="cta-button text-center">
              Schedule Consultation
            </a>
            <a href="#pricing-table" className="px-8 py-3 border border-cabo-blue text-cabo-blue rounded-lg hover:bg-gray-50 transition-colors text-center">
              Review Pricing Options
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProposalSummarySection;

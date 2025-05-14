import React from 'react';
import SectionContainer from './SectionContainer';
import { Check as CheckIconSolid } from 'lucide-react';

const ProposalSummarySection: React.FC = () => {
  return (
    <SectionContainer id="proposal-summary" bgColor="bg-cabo-gradient">
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Launch?
        </h2>
        <p className="mt-2 text-lg md:text-xl text-white/90">
          Everything's in place. Tell us when to hit 'Go.'
        </p>
      </div>
      
      <div className="max-w-xl mx-auto py-8 px-6 bg-white rounded-lg shadow-lg">
        <ul className="space-y-3">
          <li className="flex items-start text-lg leading-relaxed mb-3">
            <CheckIconSolid className="w-6 h-6 flex-shrink-0 text-green-500 mr-3 mt-1" />
            <span>Unique design for each vessel</span>
          </li>
          <li className="flex items-start text-lg leading-relaxed mb-3">
            <CheckIconSolid className="w-6 h-6 flex-shrink-0 text-green-500 mr-3 mt-1" />
            <span>Mobile-optimized UX</span>
          </li>
          <li className="flex items-start text-lg leading-relaxed mb-3">
            <CheckIconSolid className="w-6 h-6 flex-shrink-0 text-green-500 mr-3 mt-1" />
            <span>Booking-ready with FareHarbor</span>
          </li>
          <li className="flex items-start text-lg leading-relaxed mb-3">
            <CheckIconSolid className="w-6 h-6 flex-shrink-0 text-green-500 mr-3 mt-1" />
            <span>Growth-flexible (integration add-ons)</span>
          </li>
        </ul>
      </div>
      
      <p className="mt-4 text-white font-semibold text-xl hover:underline transition duration-200 text-center">
        What's left to decide?
      </p>
    </SectionContainer>
  );
};

export default ProposalSummarySection;

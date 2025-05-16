import React from 'react';
import SectionContainer from './SectionContainer';
import { LayoutGrid } from 'lucide-react';

const tiers = [
  {
    title: "Private Charter Site",
    description: "Personalized booking for a single vessel",
    features: [
      "Showcase your vessel's unique character", 
      "Create and highlight custom itineraries", 
      "Provide a seamless single-vessel booking experience", 
      "Feature professional photography that captivates"
    ],
    hookLine: "Your vessel, your brand.",
    highlight: false
  },
  {
    title: "Shared Tour Site",
    description: "Group adventure tours with local guides",
    features: [
      "Simplify group scheduling and availability", 
      "Present detailed deck and tour information", 
      "Enable easy seat reservations", 
      "Embed live commentary for an immersive experience"
    ],
    hookLine: "Unite guests with local adventures.",
    highlight: false
  },
  {
    title: "Vessel Showcase Site",
    description: "Dedicated microsite for one boat's experiences",
    features: [
      "Highlight each tour & themed excursion", 
      "Display custom itineraries and deck plans", 
      "Feature onboard amenities & crew profiles", 
      "Integrate per-experience booking widgets"
    ],
    hookLine: "Your vessel, your story.",
    highlight: false
  },
  {
    title: "Destination Funnel",
    description: "Full marketing funnel for all services",
    features: [
      "Drive conversions with dynamic landing pages", 
      "Capture leads directly via built-in forms", 
      "Ensure SEO-optimized content structure", 
      "Track engagement across multiple marketing channels"
    ],
    hookLine: "Capture every lead, drive bookings.",
    highlight: false
  },
  {
    title: "Corporate Fleet Site",
    description: "Enterprise-grade fleet management portal",
    features: [
      "Showcase large-capacity vessels for corporate outings", 
      "Feature team-building and group-event packages", 
      "Highlight amenities designed for corporate clients", 
      "Promote partnership opportunities and bulk-rates"
    ],
    hookLine: "Manage your fleet like a pro.",
    highlight: false
  }
];

const TierShowcaseSection: React.FC = () => {
  return (
    <SectionContainer 
      id="tier-showcase" 
      className="py-20 relative"
      bgColor="bg-white"
    >
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "url('/assets/wave-pattern.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="section-title text-4xl font-bold inline-flex items-center">
            <LayoutGrid className="w-9 h-9 mr-3 text-cabo-blue" />
            Site Tiers
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md border overflow-hidden"
              style={{ 
                transition: "transform 200ms, box-shadow 200ms",
                height: "480px" // Reduced height to account for removed icon
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#A0D8C5] to-[#38ABE2]"></div>
              
              {/* Title */}
              <div className="h-16 px-6 flex items-center justify-center mt-6">
                <h3 className="text-2xl font-semibold text-center">
                  {tier.title.includes('\n') 
                    ? tier.title.split('\n').map((part, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <br />}
                          {part}
                        </React.Fragment>
                      ))
                    : tier.title
                  }
                </h3>
              </div>
              
              {/* Description */}
              <div className="h-16 px-6 flex items-center justify-center">
                <p className="text-base text-gray-600 text-center">
                  {tier.description}
                </p>
              </div>
              
              {/* Features List */}
              <div className="px-6 pt-4 pb-8 h-56">
                <ul className="space-y-4">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start h-10">
                    <span className="bg-cabo-gradient w-4 h-4 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>
              
              {/* Hook Line (replaced CTA Link) */}
              <div className="h-16 flex items-center justify-center mt-4">
                <p className="text-[#059D9C] font-medium text-center">
                  {tier.hookLine}
                </p>
              </div>
            </div>
        ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TierShowcaseSection;

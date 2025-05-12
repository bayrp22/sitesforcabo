
import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Grid2x2 } from 'lucide-react';

const tiers = [
  {
    title: "Template Microsite",
    description: "Pre-designed, customizable microsite with core functionality",
    features: ["Quick deployment", "Mobile responsive", "Content management", "Basic analytics"],
    highlight: false
  },
  {
    title: "Pirate Package",
    description: "Premium microsite with advanced features and customization",
    features: ["Custom design", "Interactive elements", "Advanced analytics", "Priority support"],
    highlight: true
  },
  {
    title: "Escape Route",
    description: "High-performance microsite optimized for conversion",
    features: ["Conversion-focused", "A/B testing", "Performance optimization", "SEO enhancement"],
    highlight: false
  },
  {
    title: "Complete Bundle",
    description: "Full ecosystem solution with all microsites integrated",
    features: ["Seamless integration", "Unified analytics", "Cross-promotion", "Comprehensive support"],
    highlight: false
  }
];

const TierShowcaseSection: React.FC = () => {
  return (
    <SectionContainer id="tier-showcase" bgColor="bg-gray-50">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Grid2x2 className="w-6 h-6 text-cabo-blue" />
        <h2 className="section-title">Tier Options</h2>
      </div>
      <p className="section-subtitle">Choose the perfect microsite solution for your specific needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, index) => (
          <Card key={index} className={`card h-full transform transition-transform hover:-translate-y-1 ${tier.highlight ? 'ring-2 ring-cabo-blue shadow-lg' : ''}`}>
            <CardHeader>
              <CardTitle className={`${tier.highlight ? 'text-cabo-blue' : ''}`}>{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="bg-cabo-gradient w-4 h-4 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#pricing-table" className={`text-sm font-medium ${tier.highlight ? 'text-cabo-blue' : 'text-gray-600'} hover:underline`}>
                View pricing details →
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TierShowcaseSection;

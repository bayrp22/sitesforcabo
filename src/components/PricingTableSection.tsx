import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleCheck, DollarSign } from 'lucide-react';

// Add CSS for hover effects
const hoverStyles = `
  .pricing-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  /* Only apply hover effects on larger screens (desktop/tablet) */
  @media (min-width: 768px) {
    .pricing-card:hover {
      transform: scale(1.12);
      z-index: 10;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  }
`;

const plans = [
  {
    name: "Single Storefront",
    price: "$1,000",
    currency: "USD",
    description: "Perfect for launching one targeted vessel site",
    features: [
      "Custom design & development",
      "Mobile-responsive UX",
      "FareHarbor checkout integration",
      "Basic SEO & analytics"
    ],
    supportLine: "30 days post-launch support",
    highlight: false
  },
  {
    name: "Fleet Bundle",
    price: "$750",
    currency: "USD",
    description: "Best value for multi-vessel rollouts",
    features: [
      "All Single Storefront features",
      "Priority launch scheduling",
      "Bulk site provisioning & templating",
      "Unified analytics dashboard"
    ],
    supportLine: "Dedicated account manager",
    highlight: false
  },
  {
    name: "FareHarbor Add-On",
    price: "+ $300",
    currency: "USD",
    description: "Integrate Easily",
    features: [
      "Share your FareHarbor developer credentials.",
      "We embed the Lightframe modal into your site.",
      "We manage all API/webhook configuration."
    ],
    supportLine: "Full embed support & testing",
    highlight: false
  }
];

const PricingTableSection: React.FC = () => {
  return (
    <SectionContainer id="pricing-table" bgColor="bg-white">
      {/* Add the hover styles */}
      <style>{hoverStyles}</style>
      
      <h2 className="section-title">Pricing Options</h2>
      <p className="section-subtitle">Transparent pricing with no hidden fees</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className="card pricing-card min-h-[600px] flex flex-col"
          >
            <CardHeader>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-cabo-gradient flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-center">{plan.name}</CardTitle>
              <div className={`text-center mt-2 ${plan.name === "FareHarbor Add-On" ? "mb-2" : "mb-4"}`}>
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.currency && <span className="text-base font-bold text-gray-600 ml-1">{plan.currency}</span>}
                <span className="text-gray-500">/Site</span>
              </div>
              <p className={`text-center text-gray-600 ${plan.name === "FareHarbor Add-On" ? "text-lg font-medium mb-4" : ""}`}>
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className={`flex items-start ${plan.name === "FareHarbor Add-On" ? "leading-relaxed mb-2" : ""}`}
                  >
                    <CircleCheck className="w-5 h-5 text-cabo-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            {plan.supportLine && (
              <CardFooter className="pt-0">
                <p className={`text-center w-full font-medium ${plan.name === "FareHarbor Add-On" ? "text-base text-[#059D9C]" : "text-sm text-cabo-blue"}`}>
                  {plan.supportLine}
                </p>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PricingTableSection;

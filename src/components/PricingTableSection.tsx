
import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, CircleCheck, DollarSign } from 'lucide-react';

const plans = [
  {
    name: "Single Microsite",
    price: "$1,999",
    description: "Perfect for businesses looking to launch one targeted microsite",
    features: [
      "1 microsite design & development",
      "Content management system",
      "Mobile responsive design",
      "Basic SEO optimization",
      "30 days of support"
    ],
    buttonText: "Choose Single",
    highlight: false
  },
  {
    name: "Bundle Package",
    price: "$4,999",
    description: "Best value for a complete microsite ecosystem",
    features: [
      "3 integrated microsites",
      "Cross-site analytics",
      "Advanced customization options",
      "Premium SEO package",
      "90 days of priority support",
      "Training session for your team"
    ],
    buttonText: "Choose Bundle",
    highlight: true
  },
  {
    name: "Add-On Services",
    price: "From $499",
    description: "Enhance your microsite with additional features",
    features: [
      "Content creation package",
      "Advanced analytics setup",
      "Custom feature development",
      "Extended support plans",
      "Performance optimization"
    ],
    buttonText: "Explore Add-Ons",
    highlight: false
  }
];

const PricingTableSection: React.FC = () => {
  return (
    <SectionContainer id="pricing-table" bgColor="bg-white">
      <h2 className="section-title">Pricing Options</h2>
      <p className="section-subtitle">Transparent pricing with no hidden fees</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`card h-full flex flex-col ${plan.highlight ? 'ring-2 ring-cabo-blue shadow-lg' : ''}`}
          >
            <CardHeader>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-cabo-gradient flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-center">{plan.name}</CardTitle>
              <div className="text-center mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.name === "Add-On Services" ? null : <span className="text-gray-500">/package</span>}
              </div>
              <p className="text-center text-gray-600 mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CircleCheck className="w-5 h-5 text-cabo-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a href="#" className={`cta-button w-full text-center ${!plan.highlight ? 'bg-white border border-cabo-blue text-cabo-blue hover:bg-gray-50' : ''}`}>
                {plan.buttonText}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PricingTableSection;

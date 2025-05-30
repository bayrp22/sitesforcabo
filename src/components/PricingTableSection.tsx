import React from 'react';
import SectionContainer from './SectionContainer';
import { Check } from 'lucide-react';

// Define the structure for different plan types
interface BasePlan {
  name: string;
  description: string;
}

interface StandardPlan extends BasePlan {
  type: 'standard';
  price: string;
  currency: string;
  unit: string;
  features: string[];
  buttonText: string;
}

interface EnterprisePlan extends BasePlan {
  type: 'enterprise';
  buttonText: string;
}

interface IntegrationPlan extends BasePlan {
  type: 'integration';
  price: string;
  currency: string;
  unit: string;
}

type Plan = StandardPlan | EnterprisePlan | IntegrationPlan;

const plans: Plan[] = [
  {
    type: 'standard',
    name: "Per Site",
    description: "A personalized and optimized solution, ideal for launching a professional site focused on results.",
    price: "1,000",
    currency: "USD",
    unit: "/site",
    features: [
      "Custom design & development",
      "Mobile-responsive",
      "Essential tools integration",
      "Basic SEO & analytics included"
    ],
    buttonText: "Request Your Site",
  },
  {
    type: 'standard',
    name: "Multi-Site",
    description: "Ideal for agencies and companies that need 10 or more professional sites.",
    price: "$750",
    currency: "USD",
    unit: "/site (Min. 15)",
    features: [
      "All Single Site features",
      "Priority scheduling for launches",
      "Unified analytics dashboard",
      "Dedicated and specialized support"
    ],
    buttonText: "Request a Quote",
  },
  {
    type: 'integration',
    name: "Fareharbor Integration",
    description: "We handle API/Webhook Config & Embed Lightframe.",
    price: "$297",
    currency: "USD",
    unit: "/integration",
  }
];

const PricingTableSection: React.FC = () => {
  return (
    <SectionContainer id="pricing-table" bgColor="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pricing Options</h2>
        <p className="mt-2 text-lg text-gray-600">
          Transparent pricing with no hidden fees
        </p>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {/* Render Standard Plans */}
        {plans.filter(plan => plan.type === 'standard').map((plan, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col border border-gray-200 h-full"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
              <span className="text-lg font-semibold text-gray-600 ml-1">{plan.currency}</span>
              <span className="text-gray-500">{plan.unit}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Render Integration Plan */}
        {plans.filter(plan => plan.type === 'integration').map((plan, index) => (
          <div 
            key={index} 
            className="bg-blue-gray-500 rounded-2xl shadow-xl p-8 flex flex-col border border-gray-200 lg:col-start-3 lg:row-start-1 lg:self-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
              <span className="text-lg font-semibold text-gray-600 ml-1">{plan.currency}</span>
              <span className="text-gray-500">{plan.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PricingTableSection;

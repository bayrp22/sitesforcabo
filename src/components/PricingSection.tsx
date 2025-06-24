import React from 'react';
import { Check } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback for motion elements
  motion = {
    section: 'section',
    div: 'div',
    h2: 'h2',
    p: 'p',
  };
}

const PricingSection: React.FC = () => {
  // Check if Framer Motion is available
  const isFramerAvailable = typeof motion !== 'object' || motion.section !== 'section';

  // Motion props for scroll reveal
  const sectionProps = isFramerAvailable ? {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  const headerProps = isFramerAvailable ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  const gridProps = isFramerAvailable ? {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  const buttonProps = isFramerAvailable ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {};

  // Component selection based on availability
  const Section = isFramerAvailable ? motion.section : 'section';
  const Header = isFramerAvailable ? motion.h2 : 'h2';
  const Grid = isFramerAvailable ? motion.div : 'div';
  const ButtonContainer = isFramerAvailable ? motion.div : 'div';

  const pricingTiers = [
    {
      name: "Starter",
      price: "$15k",
      features: [
        "Professional website design",
        "Mobile-responsive layout",
        "Basic SEO optimization",
        "Contact forms & analytics",
        "3 months support included"
      ]
    },
    {
      name: "Business",
      price: "$30k",
      features: [
        "Everything in Starter",
        "Advanced SEO & content strategy",
        "E-commerce functionality",
        "Custom integrations",
        "6 months priority support"
      ]
    },
    {
      name: "Premium",
      price: "+5 sites",
      features: [
        "Everything in Business",
        "Interactive web applications",
        "Advanced analytics & tracking",
        "Custom Pricing & Timelines",
        "12 months dedicated support"
      ]
    }
  ];

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section
      id="pricing"
      className="bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200 py-16 md:py-20 lg:py-24"
      {...sectionProps}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <Header
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8"
            {...headerProps}
          >
            Transparent Packages for Every Budget
          </Header>
        </div>

        <Grid
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12 md:mb-16"
          {...gridProps}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 flex flex-col ${
                index === 1 ? 'relative overflow-hidden' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-300 via-pink-150 to-pink-300 p-[2px]">
                  <div className="bg-white rounded-2xl w-full h-full"></div>
                </div>
              )}
              <div className={`${index === 1 ? 'relative z-10' : ''} text-center mb-6`}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {tier.name}
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {tier.price}
                </div>
              </div>

              <div className={`${index === 1 ? 'relative z-10' : ''} flex-grow`}>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Grid>

        <ButtonContainer
          className="text-center"
          {...buttonProps}
        >
          <button
            onClick={scrollToQuote}
            className="bg-[#A5FF00] text-black font-semibold px-10 py-4 rounded-lg text-lg hover:bg-[#94E600] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Custom Quote →
          </button>
        </ButtonContainer>
      </div>
    </Section>
  );
};

export default PricingSection; 
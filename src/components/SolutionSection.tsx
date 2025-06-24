import React, { useState } from 'react';
import { Zap, Palette, Search, X } from 'lucide-react';

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

const SolutionSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const Subheader = isFramerAvailable ? motion.p : 'p';
  const Grid = isFramerAvailable ? motion.div : 'div';
  const ButtonContainer = isFramerAvailable ? motion.div : 'div';

  const solutions = [
    {
      icon: Zap,
      title: "Built for Speed",
      description: "Lightning-fast loading times that keep visitors engaged and reduce bounce rates. Your site loads in under 3 seconds, guaranteed."
    },
    {
      icon: Palette,
      title: "Designed to Convert",
      description: "Professional designs with strategic call-to-actions that turn visitors into customers. Every element is optimized for conversions."
    },
    {
      icon: Search,
      title: "Optimized to Rank",
      description: "SEO-optimized from day one with proper structure, meta tags, and content that helps you rank higher on Google searches."
    }
  ];

  return (
    <>
      <Section
        id="solution"
        className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 py-16 md:py-20 lg:py-24"
        {...sectionProps}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <Header
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8"
              {...headerProps}
            >
              Built for Speed, Designed to Convert, Optimized to Rank
            </Header>
            <Subheader
              className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto"
              {...headerProps}
            >
              We don't just build websites—we create digital assets that work 24/7 to grow your business with proven strategies that deliver real results.
            </Subheader>
          </div>

          <Grid
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16"
            {...gridProps}
          >
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-[#A5FF00] rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#94E600] transition-colors duration-300">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-900" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Grid>

          <ButtonContainer
            className="text-center"
            {...buttonProps}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn How It Works
            </button>
          </ButtonContainer>
        </div>
      </Section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  How Our Process Works
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#A5FF00] pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    1. Discovery & Planning
                  </h4>
                  <p className="text-gray-600">
                    We start with a comprehensive consultation to understand your business goals, target audience, and specific requirements.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#A5FF00] pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    2. Design & Development
                  </h4>
                  <p className="text-gray-600">
                    Our team creates a custom design and develops your website using modern technologies for optimal performance and user experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#A5FF00] pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    3. Testing & Launch
                  </h4>
                  <p className="text-gray-600">
                    We thoroughly test your website across all devices and browsers before launching, ensuring everything works perfectly.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#A5FF00] pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    4. Ongoing Support
                  </h4>
                  <p className="text-gray-600">
                    After launch, we provide ongoing support and maintenance to keep your website running smoothly and up-to-date.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#A5FF00] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#94E600] transition-colors duration-200"
                >
                  Got It, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SolutionSection; 
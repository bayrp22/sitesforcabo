import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section
      id="problem"
      className="bg-gray-900 min-h-screen flex items-center justify-center py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16 lg:mb-20">
          Invisible Online = Losing Business
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Column A: With a Site */}
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#A5FF00] mb-6 lg:mb-8">
              ✅ With a Professional Site
            </h3>
            <ul className="space-y-4 lg:space-y-6">
              <li className="flex items-start space-x-3 text-white">
                <span className="text-[#A5FF00] text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Customers find you 24/7 through Google searches and social media
                </span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <span className="text-[#A5FF00] text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Build trust instantly with professional design and customer testimonials
                </span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <span className="text-[#A5FF00] text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Convert visitors into customers with clear calls-to-action and contact forms
                </span>
              </li>
            </ul>
          </div>

          {/* Column B: No Site */}
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-400 mb-6 lg:mb-8">
              ❌ Without a Website
            </h3>
            <ul className="space-y-4 lg:space-y-6">
              <li className="flex items-start space-x-3 text-white">
                <span className="text-red-400 text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Potential customers can't find you when they search online
                </span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <span className="text-red-400 text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Competitors with websites capture your potential customers
                </span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <span className="text-red-400 text-xl mt-1">•</span>
                <span className="text-lg lg:text-xl">
                  Miss out on sales that happen outside business hours
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 
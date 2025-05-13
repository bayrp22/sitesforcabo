import React, { useState } from 'react';
import SectionContainer from './SectionContainer';

// Mock data for different themes
const mockupData = {
  template: {
    title: "Template Microsite",
    mobileTitle: "Template Mobile",
    desktopTitle: "Template Desktop",
    mobileScreenshot: "#A0D8C5", // Using color as placeholder
    desktopScreenshot: "#38ABE2" // Using color as placeholder
  },
  pirate: {
    title: "Pirate Package",
    mobileTitle: "Pirate Mobile",
    desktopTitle: "Pirate Desktop",
    mobileScreenshot: "#059D9C", // Using color as placeholder
    desktopScreenshot: "#0B3954" // Using color as placeholder
  },
  caboEscape: {
    title: "Escape Route",
    mobileTitle: "Escape Route Mobile",
    desktopTitle: "Escape Route Desktop",
    mobileScreenshot: "#F27D42", // Using color as placeholder
    desktopScreenshot: "#C4D6B0" // Using color as placeholder
  }
};

// CSS for the animations and device styling
const deviceStyles = `
  /* iPhone animation */
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(200, 200, 200, 0.2);
    }
    50% {
      transform: scale(1.01);
      box-shadow: 0 0 25px rgba(200, 200, 200, 0.4);
    }
  }
  .iphone-body {
    animation: pulse 4s infinite ease-in-out;
  }

  /* iMac styling */
  .imac-display {
    background-color: #2d3748; /* Darker gray for the display bezel */
    border: 1px solid #1a202c; /* Even darker border for depth */
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1), /* Softer shadow */
      0 10px 20px rgba(0, 0, 0, 0.1), /* Larger, more diffuse shadow */
      inset 0 2px 4px rgba(255, 255, 255, 0.05); /* Inner highlight for screen glass effect */
  }

  .imac-screen {
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
  }

  .imac-stand-arm {
    background-color: #a0aec0; /* Lighter gray for stand arm */
    border: 1px solid #718096;
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .imac-stand-base {
    background-color: #cbd5e0; /* Even lighter gray for base */
    border: 1px solid #a0aec0;
    box-shadow:
      0 1px 2px rgba(0,0,0,0.05), /* Bottom edge shadow */
      0 4px 8px rgba(0,0,0,0.1); /* Floor shadow */
    transform: perspective(100px) rotateX(10deg) translateY(-5px);
  }

  /* Responsive adjustments for iMac */
  @media (max-width: 640px) {
    .imac-container {
      transform: scale(0.8); /* Scale down for smaller screens */
    }
  }
  @media (max-width: 480px) {
    .imac-container {
      transform: scale(0.65); /* Further scale down for very small screens */
    }
  }
`;

const UXFlowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('template');
  
  // Get the current mockup data based on active tab
  const currentMockup = mockupData[activeTab as keyof typeof mockupData];

  return (
    <SectionContainer id="ux-flow" bgColor="bg-white">
      {/* Add device styles */}
      <style>{deviceStyles}</style>
      
      <div className="text-center mb-6">
        <h2 className="section-title">UX Flow</h2>
        <p className="section-subtitle">A seamless experience across all devices</p>
      </div>

      {/* Chrome-style Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-[#F1F5F9] rounded-t-lg">
          <button
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'template' ? 'bg-white border-b-4 border-[#059D9C]' : 'bg-[#F1F5F9]'}`}
            onClick={() => setActiveTab('template')}
          >
            Template
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'pirate' ? 'bg-white border-b-4 border-[#059D9C]' : 'bg-[#F1F5F9]'}`}
            onClick={() => setActiveTab('pirate')}
          >
            Pirate
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'caboEscape' ? 'bg-white border-b-4 border-[#059D9C]' : 'bg-[#F1F5F9]'}`}
            onClick={() => setActiveTab('caboEscape')}
          >
            Cabo Escape
          </button>
        </div>
      </div>

      {/* Two-column Grid for Mockups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Mobile View */}
        <div className="mobile-mockup p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Mobile Navigation</h3>
          <p className="text-gray-600 mb-4">
            Streamlined for touch interfaces with thumb-friendly navigation.
          </p>
          
          {/* Animated iPhone */}
          <div className="flex justify-center">
            <div className="relative iphone-body w-64 h-[32rem] bg-gray-800 rounded-[2.5rem] border-4 border-gray-700 shadow-xl p-2">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative" style={{ backgroundColor: currentMockup.mobileScreenshot }}>
                {/* Content inside the phone screen */}
                <div className="w-full h-full flex flex-col items-center justify-center text-white">
                  <p className="font-bold text-lg">{currentMockup.mobileTitle}</p>
                  <p className="text-sm opacity-80">Tap-optimized interface</p>
                </div>

                {/* Phone notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full border-2 border-gray-800"></div>
              </div>

              {/* Side buttons */}
              <div className="absolute -right-1 top-24 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
              <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
              <div className="absolute -left-1 top-12 w-1 h-4 bg-gray-700 rounded-r-sm"></div>
            </div>
          </div>
        </div>

        {/* Right: Desktop View */}
        <div className="desktop-mockup p-4 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Desktop Navigation</h3>
          <p className="text-gray-600 mb-4">
            Optimized for larger screens with intuitive menu structures.
          </p>
          
          {/* Photorealistic iMac */}
          <div className="flex justify-center">
            <div className="imac-container flex flex-col items-center">
              {/* iMac Display */}
              <div className="imac-display w-[32rem] h-[20rem] rounded-lg p-2.5 flex flex-col items-center">
                {/* Screen - 16:10 aspect ratio */}
                <div 
                  className="imac-screen w-full h-full rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: currentMockup.desktopScreenshot }}
                >
                  {/* Content inside screen */}
                  <div className="text-white text-center">
                    <p className="font-bold text-xl">{currentMockup.desktopTitle}</p>
                    <p className="opacity-80">Full-featured experience</p>
                  </div>
                </div>
                
                {/* Bottom bar with logo */}
                <div className="w-[95%] h-10 mt-2 bg-gray-700 rounded-b-md flex items-center justify-center">
                  <div className="text-gray-200 opacity-60 font-bold">
                    {/* Empty for logo */}
                  </div>
                </div>
              </div>

              {/* Stand */}
              <div className="imac-stand-arm w-12 h-16 -mt-4 rounded-b-md z-[-1] relative">
              </div>

              <div className="imac-stand-base w-48 h-2 rounded-sm mt-[-1px]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default UXFlowSection;

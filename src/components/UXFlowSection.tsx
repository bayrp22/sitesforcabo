import React, { useState } from 'react';
import SectionContainer from './SectionContainer';

// Mock data for different themes
const mockupData = {
  template: {
    title: "Template Microsite",
    mobileTitle: "Template Mobile",
    desktopTitle: "Template Desktop",
    mobileScreenshot: "#A0D8C5", // Mint green
    desktopImage: "/images/templatelandinghero.png", // Template desktop image
    tagline: "Tap-optimized interface"
  },
  pirate: {
    title: "Pirate Package",
    mobileTitle: "Pirate Mobile",
    desktopTitle: "Pirate Desktop",
    mobileScreenshot: "#F6D55C", // Gold/yellow
    desktopImage: "/images/piratelandinghero.png", // Pirate desktop image
    tagline: "Swashbuckling experience"
  },
  caboEscape: {
    title: "Escape Route",
    mobileTitle: "Escape Route Mobile",
    desktopTitle: "Escape Route Desktop",
    mobileScreenshot: "#3CAEA3", // Teal
    desktopImage: "#20639B", // Deep blue - using color as image for now
    tagline: "Adventure awaits"
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

  /* Chrome-style tabs */
  .chrome-tabs {
    background-color: transparent;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    padding: 0 8px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .chrome-tab {
    position: relative;
    height: 60px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    margin: 0 3px;
    transform-origin: bottom center;
    background-color: #f0f0f4;
  }

  .chrome-tab.active {
    background-color: #f7f7fa;
    box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transform: translateY(-3px) scale(1.05);
  }

  .chrome-tab:not(.active) {
    background-color: #eaebef;
    border-bottom: 1px solid #e2e8f0;
  }

  .chrome-tab:not(.active):hover {
    background-color: #f0f0f4;
    transform: translateY(-2px);
  }

  .tab-bottom-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: transparent;
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(0.17, 0.67, 0.56, 1.35);
  }

  .chrome-tab.active .tab-bottom-border {
    transform: scaleX(1);
  }

  /* Tab content animation */
  .tab-content {
    transition: opacity 0.4s ease, transform 0.3s ease;
    transform: translateY(0);
    opacity: 1;
  }

  .tab-content-wrapper {
    position: relative;
    z-index: 5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  /* Tab animation keyframes */
  @keyframes tabFadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply animation to tab content */
  .tab-animate-in {
    animation: tabFadeIn 0.3s forwards;
  }

  /* Responsive adjustments for iMac */
  @media (max-width: 640px) {
    .imac-container {
      transform: scale(0.85); /* Scale down for smaller screens */
    }
  }
  @media (max-width: 480px) {
    .imac-container {
      transform: scale(0.7); /* Further scale down for very small screens */
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
      
      {/* Chrome-style Tabs */}
      <div className="flex justify-center mb-10">
        <div className="chrome-tabs inline-flex rounded-t-lg overflow-hidden">
          <div
            className={`chrome-tab px-10 py-5 ${activeTab === 'template' ? 'active' : ''}`}
            onClick={() => setActiveTab('template')}
          >
            <span className="text-lg font-medium">Template</span>
            <div className="tab-bottom-border"></div>
          </div>
          <div
            className={`chrome-tab px-10 py-5 ${activeTab === 'pirate' ? 'active' : ''}`}
            onClick={() => setActiveTab('pirate')}
          >
            <span className="text-lg font-medium">Pirate</span>
            <div className="tab-bottom-border"></div>
                </div>
          <div
            className={`chrome-tab px-10 py-5 ${activeTab === 'caboEscape' ? 'active' : ''}`}
            onClick={() => setActiveTab('caboEscape')}
          >
            <span className="text-lg font-medium">Cabo Escape</span>
            <div className="tab-bottom-border"></div>
                    </div>
                  </div>
                    </div>

      {/* 1:2 Layout for devices, no background wrapper */}
      <div className={`tab-content tab-animate-in grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-center p-6 max-w-6xl mx-auto`}>
        {/* Left: Mobile View */}
        <div className="w-full flex justify-center">
          <div className="mobile-mockup">
            {/* Animated iPhone */}
            <div className="flex justify-center">
              <div className="relative iphone-body w-64 h-[32rem] bg-gray-800 rounded-[2.5rem] border-4 border-gray-700 shadow-xl p-2">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative" style={{ backgroundColor: currentMockup.mobileScreenshot }}>
                  {/* Content inside the phone screen */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-white">
                    <p className="font-bold text-lg">{currentMockup.mobileTitle}</p>
                    <p className="text-base opacity-80">{currentMockup.tagline}</p>
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
        </div>

        {/* Right: Desktop View */}
        <div className="w-full flex justify-center relative md:-mt-4">
          <div className="desktop-mockup">
            {/* Photorealistic iMac */}
            <div className="flex justify-center">
              <div className="imac-container flex flex-col items-center scale-110 transform origin-top">
                {/* iMac Display */}
                <div className="imac-display w-[40rem] h-[26rem] rounded-lg p-2.5 flex flex-col items-center">
                  {/* Screen - 16:10 aspect ratio */}
                  <div 
                    className="imac-screen w-full h-full rounded-sm flex items-center justify-center relative overflow-hidden"
                    style={{ 
                      backgroundColor: activeTab === 'caboEscape' ? currentMockup.desktopImage : '#111' 
                    }}
                  >
                    {/* Content inside screen - use image for template and pirate, solid color for cabo */}
                    {(activeTab === 'template' || activeTab === 'pirate') ? (
                      <div className="absolute inset-0 w-full h-full">
                        <img 
                          src={currentMockup.desktopImage} 
                          alt={`${currentMockup.title} desktop view`}
                          className={`w-full h-full ${activeTab === 'template' ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                    ) : (
                      <div className="text-white text-center">
                        <p className="font-bold text-xl">{currentMockup.desktopTitle}</p>
                        <p className="text-base opacity-80">Full-featured experience</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom bar with logo */}
                  <div className="w-[95%] h-10 mt-2 bg-gray-700 rounded-b-md flex items-center justify-center">
                    <div className="text-gray-200 opacity-60 font-bold">
                      {/* Empty for logo */}
                    </div>
                  </div>
                </div>

                {/* Stand */}
                <div className="imac-stand-arm w-12 h-14 -mt-4 rounded-b-md z-[-1] relative">
                </div>

                <div className="imac-stand-base w-48 h-2 rounded-sm mt-[-1px]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default UXFlowSection;

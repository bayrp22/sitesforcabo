
import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UXFlowSection: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState('desktop');

  return (
    <SectionContainer id="ux-flow" bgColor="bg-white">
      <h2 className="section-title">UX Flow</h2>
      <p className="section-subtitle">A seamless experience across all devices</p>

      <Tabs defaultValue="desktop" className="w-full max-w-4xl mx-auto" onValueChange={setActiveDevice}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="desktop">Desktop Experience</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Experience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="desktop" className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-3">Desktop Navigation</h3>
                <p className="text-gray-600 mb-4">
                  Optimized for larger screens with intuitive menu structures and clear call-to-actions.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Homepage entry with dynamic hero section</li>
                  <li>Horizontal navigation with dropdown menus</li>
                  <li>Content-rich experience with multimedia elements</li>
                  <li>Sidebar widgets for additional information</li>
                  <li>Footer with comprehensive site map and resources</li>
                </ol>
              </div>
              
              <div className="md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 p-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 text-center text-sm text-gray-600">Wild Cabo Microsite</div>
                </div>
                <div className="p-4 h-64 bg-gradient-to-b from-white to-gray-100">
                  <div className="h-12 bg-white mb-4 rounded flex items-center px-4">
                    <div className="w-24 h-6 bg-cabo-gradient rounded"></div>
                    <div className="flex-1"></div>
                    <div className="flex gap-4">
                      <div className="w-16 h-4 bg-gray-200 rounded"></div>
                      <div className="w-16 h-4 bg-gray-200 rounded"></div>
                      <div className="w-16 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 h-48">
                    <div className="w-2/3 bg-white rounded p-2">
                      <div className="w-full h-8 bg-cabo-blue bg-opacity-20 rounded mb-2"></div>
                      <div className="w-full h-24 bg-cabo-turquoise bg-opacity-20 rounded"></div>
                    </div>
                    <div className="w-1/3 bg-white rounded p-2">
                      <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                        <div className="w-16 h-16 bg-cabo-gradient rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mobile" className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold mb-3">Mobile Navigation</h3>
                <p className="text-gray-600 mb-4">
                  Streamlined for touch interfaces with thumb-friendly navigation and simplified content.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Hamburger menu for compact navigation</li>
                  <li>Touch-optimized buttons and interactions</li>
                  <li>Progressive content loading for speed</li>
                  <li>Bottom navigation bar for key actions</li>
                  <li>Simplified forms with mobile-first design</li>
                </ol>
              </div>
              
              <div className="md:w-2/3 flex justify-center">
                <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <div className="absolute top-0 w-full h-6 bg-black rounded-t-2xl flex justify-center items-center">
                      <div className="w-16 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="mt-6 p-2 h-full bg-gradient-to-b from-white to-gray-100">
                      <div className="h-10 bg-white mb-4 flex items-center justify-between px-3 rounded">
                        <div className="w-8 h-5 flex flex-col justify-between">
                          <div className="h-1 bg-gray-400 rounded-full"></div>
                          <div className="h-1 bg-gray-400 rounded-full"></div>
                          <div className="h-1 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="w-12 h-5 bg-cabo-gradient rounded"></div>
                      </div>
                      <div className="w-full h-40 bg-cabo-blue bg-opacity-20 rounded mb-3"></div>
                      <div className="w-full h-6 bg-cabo-turquoise bg-opacity-30 rounded mb-2"></div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded mb-4"></div>
                      <div className="w-full h-10 bg-cabo-gradient rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </SectionContainer>
  );
};

export default UXFlowSection;

import { CheckIcon, BoltIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, CpuChipIcon, PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SectionContainer from "./SectionContainer";
import React, { useState } from 'react';

export default function SeoPerformanceSection() {
  const [zoomed, setZoomed] = useState(false);
  const handleImageClick = () => setZoomed(z => !z);
  return (
    <SectionContainer id="seo-performance" bgColor="bg-white py-16 mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Performance, SEO &amp; Analytics</h2>
        <p className="mt-2 text-lg text-gray-600">
          Core optimizations to boost visibility and speed
        </p>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4 mx-auto"></div>
      </div>
      
      {/* Features grid with subtle background */}
      <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Image Card - container and image both clickable/zoomable */}
          <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-8">
            <div 
              className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-transform duration-300 hover:shadow-md hover:scale-[1.02] cursor-zoom-in ${zoomed ? 'scale-[2.5] z-30 overflow-visible' : ''}`}
              style={{ display: 'block', margin: '0 auto', cursor: 'pointer', position: 'relative' }}
              onClick={handleImageClick}
            >
              <img 
                src="https://i.imgur.com/7XJ5HoZ.png"
                alt="Speed optimization dashboard"
                className="w-full h-auto"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
            {/* Scalable & Extendable callout */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm w-full">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Scalable & Extendable</h3>
                  <p className="mt-2 text-base text-gray-700">
                    These core services lay the groundwork; as Needs grow, we can layer on advanced SEO, schema markup, content strategy, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Cards - new modern card style, centered and visually distinct, now shorter and wider */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
            {/* Essential metadata */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-100 p-2 rounded-full mb-2 flex items-center justify-center">
                <DocumentTextIcon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Essential metadata</h3>
              <p className="text-gray-700 text-center text-sm">We craft custom page titles, meta descriptions, and social tags for maximum search and share visibility.</p>
            </div>
            {/* Analytics setup */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-100 p-2 rounded-full mb-2 flex items-center justify-center">
                <ChartBarIcon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Analytics setup</h3>
              <p className="text-gray-700 text-center text-sm">We handle domain, SSL, and Google Analytics so you can track performance from day one.</p>
            </div>
            {/* Fast Loading */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-100 p-2 rounded-full mb-2 flex items-center justify-center">
                <BoltIcon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Fast loading</h3>
              <p className="text-gray-700 text-center text-sm">We optimize every site for speed with server-side rendering and smart image delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
} 
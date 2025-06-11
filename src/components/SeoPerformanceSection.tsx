import { CheckIcon, BoltIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, CpuChipIcon, PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SectionContainer from "./SectionContainer";
import React from 'react';

export default function SeoPerformanceSection() {
  return (
    <SectionContainer id="seo-performance" bgColor="bg-black py-16 mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Performance, SEO &amp; Analytics</h2>
        <p className="mt-2 text-lg text-gray-300">
          Core optimizations to boost visibility and speed
        </p>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4 mx-auto"></div>
      </div>
      
      {/* Features grid with subtle background */}
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Image Card - static image */}
          <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-8">
            <div 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700 transition-transform hover:shadow-md hover:scale-[1.02]"
            >
              <img 
                src="https://i.imgur.com/vu9gkYR.png"
                alt="Speed optimization dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Scalable & Extendable callout */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-sm w-full">
          <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
                  <h3 className="text-xl font-semibold text-white">Scalable & Extendable</h3>
                  <p className="mt-2 text-base text-gray-300">
                    These core services lay the groundwork; as Needs grow, we can layer on advanced SEO, schema markup, content strategy, and more.
                  </p>
            </div>
          </div>
            </div>
          </div>
          {/* Feature Cards - new modern card style, centered and visually distinct, now shorter and wider */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
            {/* Essential metadata */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-700 p-2 rounded-full mb-2 flex items-center justify-center">
                <DocumentTextIcon className="w-7 h-7 text-blue-300" />
            </div>
              <h3 className="text-lg font-bold text-center mb-2 text-white">Essential metadata</h3>
              <p className="text-gray-300 text-center text-sm">We craft custom page titles, meta descriptions, and social tags for maximum search and share visibility.</p>
            </div>
            {/* Analytics setup */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-700 p-2 rounded-full mb-2 flex items-center justify-center">
                <ChartBarIcon className="w-7 h-7 text-blue-300" />
          </div>
              <h3 className="text-lg font-bold text-center mb-2 text-white">Analytics setup</h3>
              <p className="text-gray-300 text-center text-sm">We handle domain, SSL, and Google Analytics so you can track performance from day one.</p>
            </div>
            {/* Fast Loading */}
            <div className="bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
              <div className="bg-blue-700 p-2 rounded-full mb-2 flex items-center justify-center">
                <BoltIcon className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-white">Fast loading</h3>
              <p className="text-gray-300 text-center text-sm">We optimize every site for speed with server-side rendering and smart image delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
} 
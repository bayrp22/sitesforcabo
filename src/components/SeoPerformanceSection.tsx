import { CheckIcon, BoltIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, CpuChipIcon, PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SectionContainer from "./SectionContainer";
import React, { useState } from 'react';

// Image gallery for the modal
const imageGallery = [
  {
    src: "https://i.imgur.com/GAlfbSx.png",
    alt: "Speed optimization dashboard"
  },
  {
    src: "https://i.imgur.com/A6cHnqZ.png",
    alt: "SEO performance metrics"
  },
  {
    src: "https://i.imgur.com/wgbIgcy.png ",
    alt: "Keyword ranking analysis"
  },
  {
    src: "https://i.imgur.com/iewUFQe.png ",
    alt: "Conversion tracking metrics"
  }
];

export default function SeoPerformanceSection() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1
    );
  };
  
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Fast Loading */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <BoltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Fast loading</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Server-Side Rendering & Incremental Static Regeneration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Lazy-load images & assets via Next.js Image component</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Analytics setup */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <ChartBarIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Analytics setup</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Domain & SSL provisioning</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Google Analytics install or link to existing ID</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Essential metadata */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <DocumentTextIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Essential metadata</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Custom page titles & meta descriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Open Graph social preview tags</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Performance foundations */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <CpuChipIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Performance foundations</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Code-splitting & bundle reduction</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Automated Core Web Vitals checks</span>
                </li>
              </ul>
            </div>
          </div>
          {/* International ready */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <GlobeAltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">International ready</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Basic locale detection & routing</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Hreflang tags for multi-language URLs</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image Card */}
          <div className="flex items-start">
            <div className="w-full">
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer transition-transform hover:shadow-md hover:scale-[1.02]"
                onClick={toggleImageModal}
              >
                <img 
                  src={imageGallery[0].src}
                  alt={imageGallery[0].alt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scalable & Extendable callout */}
      <div className="bg-blue-50 p-6 rounded-lg mt-10 border border-blue-100 shadow-sm">
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
      
      {/* Image Preview Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={toggleImageModal}>
          <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-20"
              onClick={(e) => {
                e.stopPropagation();
                toggleImageModal();
              }}
            >
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors z-20"
              onClick={prevImage}
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors z-20"
              onClick={nextImage}
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white z-20">
              {currentImageIndex + 1} / {imageGallery.length}
            </div>
            
            {/* Current image */}
            <img 
              src={imageGallery[currentImageIndex].src}
              alt={imageGallery[currentImageIndex].alt}
              className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </SectionContainer>
  );
} 
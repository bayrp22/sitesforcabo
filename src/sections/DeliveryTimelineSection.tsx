import React, { useState, useRef } from 'react'
import useInView from '../hooks/useInView'
import { CheckIcon, BoltIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, CpuChipIcon, PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon, CloudArrowDownIcon, SparklesIcon, PaintBrushIcon, ShieldCheckIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function DeliveryTimelineSection() {
  const [activeTab, setActiveTab] = useState('you')
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { threshold: 0.3 })

  return (
    <section 
      ref={containerRef} 
      className={`delivery-section ${inView ? 'animate' : ''}`}
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="delivery-container">
        <h2 className="delivery-title" style={{ color: "#60A5FA" }}>
          Delivery Timeline
        </h2>
        
        {/* Tab Navigation */}
        <div className="delivery-tabs">
          <button 
            className={`tab-button ${activeTab === 'you' ? 'active' : ''}`} 
            onClick={() => setActiveTab('you')}
            style={{ backgroundColor: activeTab === 'you' ? '#3B82F6' : '#4B5563', color: 'white' }}
          >
            You Provide
          </button>
          <button 
            className={`tab-button ${activeTab === 'we' ? 'active' : ''}`}
            onClick={() => setActiveTab('we')}
            style={{ backgroundColor: activeTab === 'we' ? '#3B82F6' : '#4B5563', color: 'white' }}
          >
            We Handle
          </button>
        </div>
        
        {/* You Provide Panel */}
        <div className={`tab-panel ${activeTab === 'you' ? 'active' : ''}`} id="you-provide" style={{ backgroundColor: '#2D3748', color: 'white' }}>
          <h3 style={{ color: 'white' }}>Before we start, please gather and share:</h3>
          
          <div className="provide-group">
            <h4 style={{ color: 'white' }}>Assets & Branding</h4>
            <ol style={{ color: 'white' }}>
              <li style={{ color: 'white' }}>Brand Portfolio: Logos, color palette, typography guidelines</li>
              <li style={{ color: 'white' }}>Vessel Imagery: High-res hero shots & 20+ highlight photos per boat</li>
              <li style={{ color: 'white' }}>Content Assets: Experience descriptions, pricing, FAQs</li>
            </ol>
          </div>
          
          <div className="provide-group">
            <h4 style={{ color: 'white' }}>Technical & Legal</h4>
            <ol style={{ color: 'white' }}>
              <li style={{ color: 'white' }}>FareHarbor Integration Details: API/webhook credentials & dev docs</li>
              <li style={{ color: 'white' }}>Domain Configuration: DNS access, host records, SSL requirements</li>
              <li style={{ color: 'white' }}>Legal & Billing Info: Terms of service, privacy policy links</li>
            </ol>
          </div>
          
          <div className="reminder-box" style={{ backgroundColor: '#2563EB', borderLeftColor: '#60A5FA', color: 'white' }}>
            Gather these assets within 5 days to keep your timeline on track.
          </div>
        </div>
        
        {/* We Provide Panel */}
        <div className={`tab-panel ${activeTab === 'we' ? 'active' : ''}`} id="we-provide" style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}>
          
          {/* Delivery Cadence/Rollout Infographic - Enhanced */}
          <div className="process-infographic vertical flex flex-col items-center">
            <div className="step bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-sm flex items-center justify-between space-x-4 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                  <CloudArrowDownIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="step-name font-semibold text-lg mt-1" style={{ color: 'white' }}>Receive Assets</div>
                  <div className="step-desc text-sm" style={{ color: '#E5E7EB' }}>We receive site assets</div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-semibold text-sm" style={{ color: '#60A5FA' }}>Days 1 - 5</div>
              </div>
            </div>
            
            <div className="step-arrow text-3xl my-2" style={{ color: '#60A5FA' }}>↓</div>
            
            <div className="step bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-sm flex items-center justify-between space-x-4 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="step-name font-semibold text-lg mt-1" style={{ color: 'white' }}>Build Your Concept</div>
                  <div className="step-desc text-sm" style={{ color: '#E5E7EB' }}>We bring concept to life</div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-semibold text-sm" style={{ color: '#60A5FA' }}>Days 6 - 10</div>
              </div>
            </div>
            
            <div className="step-arrow text-3xl my-2" style={{ color: '#60A5FA' }}>↓</div>
            
            <div className="step bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-sm flex items-center justify-between space-x-4 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                  <PaintBrushIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="step-name font-semibold text-lg mt-1" style={{ color: 'white' }}>Polish Details</div>
                  <div className="step-desc text-sm" style={{ color: '#E5E7EB' }}>We polish to the final detail</div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-semibold text-sm" style={{ color: '#60A5FA' }}>Days 11 - 12</div>
              </div>
            </div>

            <div className="step-arrow text-3xl my-2" style={{ color: '#60A5FA' }}>↓</div>

            <div className="step bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-sm flex items-center justify-between space-x-4 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="step-name font-semibold text-lg mt-1" style={{ color: 'white' }}>Test Integrations</div>
                  <div className="step-desc text-sm" style={{ color: '#E5E7EB' }}>We test all integrations extensively</div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-semibold text-sm" style={{ color: '#60A5FA' }}>Days 13 - 14</div>
              </div>
            </div>

            <div className="step-arrow text-3xl my-2" style={{ color: '#60A5FA' }}>↓</div>

            <div className="step bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-sm flex items-center justify-between space-x-4 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-600 p-3 rounded-full">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="step-name font-semibold text-lg mt-1" style={{ color: 'white' }}>Deploy & Go Live</div>
                  <div className="step-desc text-sm" style={{ color: '#E5E7EB' }}>We deploy and your site is live!</div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="font-semibold text-sm" style={{ color: '#60A5FA' }}>Day 15</div>
              </div>
            </div>
          </div>

          {/* Add a note about the 2-week timeline */}
          <p className="mt-8 text-center text-sm" style={{ color: 'white' }}>
            This process typically takes around 2 weeks per site, depending on complexity.
          </p>

        </div>
      </div>
    </section>
  )
} 
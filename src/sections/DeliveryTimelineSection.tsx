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
    >
      <div className="delivery-container">
        <h2 className="delivery-title">
          <span role="img" aria-label="calendar">📅</span> Delivery Timeline
        </h2>
        
        {/* Tab Navigation */}
        <div className="delivery-tabs">
          <button 
            className={`tab-button ${activeTab === 'you' ? 'active' : ''}`} 
            onClick={() => setActiveTab('you')}
          >
            You Provide
          </button>
          <button 
            className={`tab-button ${activeTab === 'we' ? 'active' : ''}`}
            onClick={() => setActiveTab('we')}
          >
            We Provide
          </button>
        </div>
        
        {/* You Provide Panel */}
        <div className={`tab-panel ${activeTab === 'you' ? 'active' : ''}`} id="you-provide">
          <h3>Before we start, please gather and share:</h3>
          
          <div className="provide-group">
            <h4><span role="img" aria-label="package">📦</span> Assets & Branding</h4>
            <ul>
              <li>Brand Portfolio: Logos, color palette, typography guidelines</li>
              <li>Vessel Imagery: High-res hero shots & 20+ highlight photos per boat</li>
              <li>Content Assets: Experience descriptions, pricing, FAQs</li>
            </ul>
          </div>
          
          <div className="provide-group">
            <h4><span role="img" aria-label="gear">⚙️</span> Technical & Legal</h4>
            <ul>
              <li>FareHarbor Integration Details: API/webhook credentials & dev docs</li>
              <li>Domain Configuration: DNS access, host records, SSL requirements</li>
              <li>Legal & Billing Info: Terms of service, privacy policy links</li>
              <li>Contact & Support: Primary point of contact & review cadence</li>
            </ul>
          </div>
          
          <div className="reminder-box">
            Gather these assets within 5 days to keep your timeline on track.
          </div>
        </div>
        
        {/* We Provide Panel */}
        <div className={`tab-panel ${activeTab === 'we' ? 'active' : ''}`} id="we-provide">
          
          {/* Delivery Cadence/Rollout Infographic - Enhanced */}
          <div className="process-infographic vertical flex flex-col items-center">
            <div className="step bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <CloudArrowDownIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="step-name font-semibold text-lg mt-1">Receive Assets</div>
                <div className="step-desc text-gray-700 text-sm">We receive site assets</div>
              </div>
            </div>
            
            <div className="step-arrow text-blue-500 text-3xl my-2">↓</div>
            
            <div className="step bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <SparklesIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="step-name font-semibold text-lg mt-1">Concept to Reality</div>
                <div className="step-desc text-gray-700 text-sm">We turn concept to reality</div>
              </div>
            </div>
            
            <div className="step-arrow text-blue-500 text-3xl my-2">↓</div>
            
            <div className="step bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <PaintBrushIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="step-name font-semibold text-lg mt-1">Polish Details</div>
                <div className="step-desc text-gray-700 text-sm">We polish to the final detail</div>
              </div>
            </div>

            <div className="step-arrow text-blue-500 text-3xl my-2">↓</div>

            <div className="step bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="step-name font-semibold text-lg mt-1">Test Integrations</div>
                <div className="step-desc text-gray-700 text-sm">We test all integrations extensively</div>
              </div>
            </div>

            <div className="step-arrow text-blue-500 text-3xl my-2">↓</div>

            <div className="step bg-white rounded-lg shadow-md p-6 w-full max-w-sm flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <RocketLaunchIcon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="step-name font-semibold text-lg mt-1">Deploy & Go Live</div>
                <div className="step-desc text-gray-700 text-sm">We deploy and your site is live!</div>
              </div>
            </div>
          </div>

          {/* Add a note about the 2-week timeline */}
          <p className="mt-8 text-center text-gray-700 text-sm">
            This process typically takes around 2 weeks per site, depending on complexity.
          </p>

        </div>
      </div>
    </section>
  )
} 
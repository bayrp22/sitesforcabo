import React, { useState, useRef } from 'react'
import useInView from '../hooks/useInView'

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
              <li>Vessel Imagery: High-res hero shots & 4–6 highlight photos per boat</li>
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
          <div className="ribbon">1–2 Weeks/Site</div>
          
          <ol className="numbered-list">
            <li>1–2 week turnaround per site (depending on tier and complexity)</li>
            <li>Custom timeline for 20+ sites (bulk-rollouts coordinated via Sprint 0)</li>
          </ol>
          
          <blockquote className="callout">
            "We'll handle all UI/UX, booking integration, SEO setup, QA, launch & live tracking."
          </blockquote>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-details">
                <div className="step-name">Design</div>
                <div className="step-desc">UI/UX & Branding</div>
              </div>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-details">
                <div className="step-name">Build</div>
                <div className="step-desc">Development & Integration</div>
              </div>
            </div>
            
            <div className="step-arrow">→</div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-details">
                <div className="step-name">Launch</div>
                <div className="step-desc">QA & Deployment</div>
              </div>
            </div>
          </div>
          
          <div className="confidence-quote">
            "You focus on running your boats. We'll handle the web."
          </div>
        </div>
      </div>
    </section>
  )
} 
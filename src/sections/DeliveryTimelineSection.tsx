import React, { useState, useRef, useEffect } from 'react'
import useInView from '../hooks/useInView' // assume an in-view hook to trigger animations

export default function DeliveryTimelineSection() {
  const [mode, setMode] = useState('you')
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { threshold: 0.3 })

  const youProvideItems = [
    "Brand Portfolio: Logos, color palette, typography guidelines",
    "Vessel Imagery: High-res hero shots & 4–6 highlight photos per boat",
    "FareHarbor Integration Details: API/webhook credentials & dev docs",
    "Domain Configuration: DNS access, host records, SSL requirements",
    "Content Assets: Experience descriptions, pricing, FAQs",
    "Legal & Billing Info: Terms of service, privacy policy links",
    "Contact & Support: Primary point of contact & review cadence"
  ]

  const weProvideItems = [
    "1–2 week turnaround per site (depending on tier and complexity)",
    "Custom timeline for 20+ sites (bulk-rollouts coordinated via Sprint 0)"
  ]

  return (
    <section className={`delivery-timeline ${inView ? 'animate' : ''}`} ref={containerRef}>
      <h2><span className="icon">📅</span> Delivery Timeline</h2>
      
      {/* — Toggle pills — */}
      <div className="dt-toggle">
        <button
          className={mode === 'you' ? 'active' : ''}
          onClick={() => setMode('you')}
        >
          You Provide
        </button>
        <button
          className={mode === 'we' ? 'active' : ''}
          onClick={() => setMode('we')}
        >
          We Provide
        </button>
      </div>

      <div className="dt-columns">
        <div className={`dt-column ${mode === 'you' ? 'active' : ''}`}>
          <h3>Before we start, please gather and share:</h3>
          <ul className="dt-list">
            {youProvideItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className={`dt-column ${mode === 'we' ? 'active' : ''}`}>
          <ul className="dt-list">
            {weProvideItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="dt-callout">
            "We'll handle all UI/UX, booking integration, SEO setup, QA, launch & live tracking."
          </p>
        </div>
      </div>
    </section>
  )
} 
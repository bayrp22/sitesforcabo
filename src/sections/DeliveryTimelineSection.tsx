import React, { useState, useRef, useEffect } from 'react'
import useInView from '../hooks/useInView' // assume an in-view hook to trigger animations

export default function DeliveryTimelineSection() {
  const [mode, setMode] = useState('you')
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { threshold: 0.3 })

  // Grouped "You Provide" items
  const youProvideGroups = [
    {
      title: "Assets & Branding",
      icon: "📷", // Placeholder for icon
      items: [
        "Brand Portfolio: Logos, color palette, typography guidelines",
        "Vessel Imagery: High-res hero shots & 4–6 highlight photos per boat",
        "Content Assets: Experience descriptions, pricing, FAQs"
      ]
    },
    {
      title: "Technical & Legal",
      icon: "⚙️", // Placeholder for icon
      items: [
        "FareHarbor Integration Details: API/webhook credentials & dev docs",
        "Domain Configuration: DNS access, host records, SSL requirements",
        "Legal & Billing Info: Terms of service, privacy policy links",
        "Contact & Support: Primary point of contact & review cadence"
      ]
    }
  ];

  const weProvideItems = [
    "1–2 week turnaround per site (depending on tier and complexity)",
    "Custom timeline for 20+ sites (bulk-rollouts coordinated via Sprint 0)"
  ]

  // Delivery steps
  const deliverySteps = [
    { name: "Design", description: "UI/UX & Branding" },
    { name: "Build", description: "Development & Integration" },
    { name: "Launch", description: "QA & Deployment" }
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
          
          {youProvideGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="dt-group">
              <h4 className="dt-group-title">
                <span className="dt-group-icon">{group.icon}</span>
                {group.title}
              </h4>
              <ul className="dt-list">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`dt-column delivery-card ${mode === 'we' ? 'active' : ''}`}>
          <div className="ribbon">1–2 Weeks/Site</div>
          
          <ol className="timeline-list">
            {weProvideItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          
          <p className="dt-callout">
            "We'll handle all UI/UX, booking integration, SEO setup, QA, launch & live tracking."
          </p>
          
          <div className="steps" role="list">
            {deliverySteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="step" role="listitem">
                  <div className="step-circle" aria-label={`Step ${index + 1}: ${step.name}`}>{index + 1}</div>
                  <div className="step-label">
                    {step.name}<br/><small>{step.description}</small>
                  </div>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
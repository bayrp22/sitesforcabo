import React, { useState, useRef, useEffect } from 'react'
import useInView from '../hooks/useInView' // assume an in-view hook to trigger animations

export default function DeliveryTimelineSection() {
  const [mode, setMode] = useState('you')
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { threshold: 0.3 })

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

      <div className="dt-rail-wrap">
        <div className="dt-rail"></div>
        <div className="dt-cards">
        <div className="dt-card">
          <h3 className="dt-stage">Planning & Setup</h3>
          <span className="dt-step">Sprint 0</span>
          <ul>
            {mode === 'you'
              ? ['Vessel List & Site Tier Selection', 'Brand ID Portfolio, Pics, & FH Login'].map((item, i) => <li key={i}>{item}</li>)
              : ['Site Planning Matrix', 'Timeline Lock & Repo Spin Up'].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="dt-card">
          <h3 className="dt-stage">First Build & Launch</h3>
          <span className="dt-step">Site 1</span>
          <ul>
            {mode === 'you'
              ? ['Experience Details', 'Unique Tour Features'].map((item, i) => <li key={i}>{item}</li>)
              : ['Custom Design & Layout', 'Booking Checkout Integration'].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="dt-card">
          <h3 className="dt-stage">Remaining Sites</h3>
          <span className="dt-step">Bi-Weekly Rollouts</span>
          <ul>
            {mode === 'you'
              ? ['Site Specific Assets', 'Minor Feedback'].map((item, i) => <li key={i}>{item}</li>)
              : ['QA / Launch / Indexing', 'Custom Integrations'].map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
} 
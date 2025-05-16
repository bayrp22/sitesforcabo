import React from 'react';
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

// Try to import Framer Motion, but don't fail if it's not available
let motion: any;
try {
  motion = require('framer-motion');
} catch (error) {
  // Fallback component for when framer-motion is not available
  motion = {
    div: 'div'
  };
}

export default function ConceptFunnels() {
  // Use a regular div if framer-motion is not available
  const MotionDiv = motion.div || 'div';
  
  return (
    <section className="concepts" id="concept-funnels">
      <h2 className="concepts__title">Funnel Concepts in Action</h2>
      <p className="concepts__subtitle">
        Two live prototypes already gathering data & feedback.
      </p>

      <div className="concepts__grid--two-up">
        {/* General Funnel */}
        <article className="concepts__card">
          <a href="https://wc-funnelconcept.netlify.app/" target="_blank" rel="noopener">
            <img
              className="concepts__thumb"
              src="https://i.imgur.com/HIVMIo3.png"
              alt="General Funnel prototype homepage"
              loading="lazy"
            />
          </a>
          <h3>General Funnel (Template)</h3>
          <p>High-level marketing entry point</p>
        </article>

        {/* Destination Funnel */}
        <article className="concepts__card">
          <a href="https://wc-destinationconcept.netlify.app/" target="_blank" rel="noopener">
            <img
              className="concepts__thumb"
              src="https://i.imgur.com/2dcxLvY.jpeg"
              alt="Destination Funnel prototype homepage"
              loading="lazy"
            />
          </a>
          <h3>Destination Funnel (Cabo-specific)</h3>
          <p>Laser-focused on tourist searches</p>
        </article>
      </div>

      <button
        className="concepts__cta"
        onClick={() => {
          window.open('https://wc-funnelconcept.netlify.app/', '_blank');
          window.open('https://wc-destinationconcept.netlify.app/', '_blank');
        }}
      >
        Open Both Demos&nbsp;<ArrowUpRightIcon className="w-4 h-4 inline" />
      </button>
    </section>
  );
} 
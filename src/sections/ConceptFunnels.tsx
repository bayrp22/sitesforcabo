import React from 'react';

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

      <div className="concepts__grid">
        {/* Card 1 */}
        <MotionDiv
          initial={motion.div !== 'div' ? { opacity: 0, y: 20 } : undefined}
          animate={motion.div !== 'div' ? { opacity: 1, y: 0 } : undefined}
          transition={motion.div !== 'div' ? { duration: 0.4, delay: 0 } : undefined}
        >
          <a
            href="https://wildcabotemplate.netlify.app/"
            target="_blank"
            rel="noopener"
            className="concepts__card"
          >
            <div className="concepts__thumb">
              <img
                src="https://i.imgur.com/HIVMIo3.png"
                alt="General Funnel prototype"
                loading="lazy"
              />
            </div>
            <h3>General Funnel (Template)</h3>
            <span>High-level marketing entry point</span>
          </a>
        </MotionDiv>

        {/* Card 2 */}
        <MotionDiv
          initial={motion.div !== 'div' ? { opacity: 0, y: 20 } : undefined}
          animate={motion.div !== 'div' ? { opacity: 1, y: 0 } : undefined}
          transition={motion.div !== 'div' ? { duration: 0.4, delay: 0.15 } : undefined}
        >
          <a
            href="https://destinationconcept.netlify.app/"
            target="_blank"
            rel="noopener"
            className="concepts__card"
          >
            <div className="concepts__thumb">
              <img
                src="https://i.imgur.com/2dcxLvY.jpeg"
                alt="Destination Funnel prototype"
                loading="lazy"
              />
            </div>
            <h3>Destination Funnel (Cabo-specific)</h3>
            <span>Laser-focused on tourist searches</span>
          </a>
        </MotionDiv>
      </div>

      <button
        className="concepts__cta"
        onClick={() => {
          window.open('https://wildcabotemplate.netlify.app/', '_blank');
          window.open('https://destinationconcept.netlify.app/', '_blank');
        }}
      >
        Open Both Demos ↗︎
      </button>
    </section>
  );
} 
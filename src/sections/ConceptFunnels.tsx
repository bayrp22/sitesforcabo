import React, { useEffect, useRef } from 'react';
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

export default function ConceptFunnels() {
  const card1Ref = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);
  
  // Set up intersection observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    
    return () => {
      if (card1Ref.current) observer.unobserve(card1Ref.current);
      if (card2Ref.current) observer.unobserve(card2Ref.current);
    };
  }, []);
  
  return (
    <section className="funnel-concepts" id="concept-funnels">
      <h2>Funnel Concepts in Action</h2>
      <p className="subtitle">
        Two live prototypes already gathering data & feedback.
      </p>

      <div className="funnel-concepts__grid">
        {/* General Funnel */}
        <article ref={card1Ref} className="funnel-concepts__card">
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
        <article ref={card2Ref} className="funnel-concepts__card">
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
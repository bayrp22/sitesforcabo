import React, { useEffect, useRef } from 'react';
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

export default function ConceptFunnels() {
  const cardOneRef = useRef<HTMLDivElement>(null);
  const cardTwoRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardOneRef.current) observer.observe(cardOneRef.current);
    if (cardTwoRef.current) observer.observe(cardTwoRef.current);
    
    return () => {
      if (cardOneRef.current) observer.unobserve(cardOneRef.current);
      if (cardTwoRef.current) observer.unobserve(cardTwoRef.current);
    };
  }, []);
  
  return (
    <section className="funnel-concepts" id="concept-funnels">
      <h2>Prototypes in Action</h2>
      <p className="subtitle">
        Two live prototypes to show our general direction & some insight into funnel psychology.
      </p>

      <div className="funnel-concepts__grid">
        {/* General Funnel - Left Side */}
        <div className="fc-card-wrap fc-card-wrap--left">
          <div className="funnel-concepts__card" ref={cardOneRef}>
            <a href="https://wc-funnelconcept.netlify.app/" target="_blank" rel="noopener">
              <img
                className="concepts__thumb"
                src="https://i.imgur.com/HIVMIo3.png"
                alt="General Funnel prototype homepage"
                loading="lazy"
              />
            </a>
          </div>
          <div className="fc-caption">
            <p className="card-title">Funnel Concept Page</p>
            <p className="card-sub">Method behind our site hierarchy</p>
          </div>
        </div>

        {/* Destination Funnel - Right Side */}
        <div className="fc-card-wrap fc-card-wrap--right">
          <div className="funnel-concepts__card" ref={cardTwoRef}>
            <a href="https://wc-destinationconcept.netlify.app/" target="_blank" rel="noopener">
              <img
                className="concepts__thumb"
                src="https://i.imgur.com/2dcxLvY.jpeg"
                alt="Destination Funnel prototype homepage"
                loading="lazy"
              />
            </a>
          </div>
          <div className="fc-caption">
            <p className="card-title">Destination Funnel</p>
            <p className="card-sub">Laser-focused on tourist searches for Los Cabos</p>
          </div>
        </div>
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
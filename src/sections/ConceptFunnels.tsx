import React from 'react';

export default function ConceptFunnels() {
  return (
    <section className="py-32 text-center">
      <h2 className="section-title">Funnel Concepts in Action</h2>
      <p className="section-sub">
        Two prototypes already live & collecting feedback.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <a href="https://wildcabotemplate.netlify.app/" target="_blank">
          <img src="/img/funnel-general.png" alt="General Funnel" className="w-full h-auto" />
          <h3 className="mt-4 font-semibold">General Funnel</h3>
        </a>
        <a href="https://destinationconcept.netlify.app/" target="_blank">
          <img src="/img/funnel-destination.png" alt="Destination Funnel" className="w-full h-auto" />
          <h3 className="mt-4 font-semibold">Destination Funnel</h3>
        </a>
      </div>
    </section>
  );
} 
import React from 'react';

const demos = [
  {
    name: 'Pirate Group Site',
    url: 'https://cabopirates.netlify.app/',
    img: '/img/demo-pirate.png',
  },
  {
    name: 'Cabo Wave Private',
    url: 'https://cabowaveprivate.framer.website/',
    img: '/img/demo-wave.png',
  },
  {
    name: 'Tu Enamorado',
    url: 'https://tuenamoradoprivate.framer.website/',
    img: '/img/demo-enamorado.png',
  },
  {
    name: 'Destination Funnel',
    url: 'https://wildcabodestination.framer.website/',
    img: '/img/demo-destination.png',
  },
  {
    name: 'Corporate Site',
    url: 'https://wildcabocorporate.framer.website/',
    img: '/img/demo-corporate.png',
  },
];

export default function DemoGallery() {
  return (
    <section className="py-28">
      <h2 className="section-title text-center">Live Demos</h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {demos.map(d => (
          <a key={d.name} href={d.url} target="_blank" className="group">
            <img src={d.img} alt={d.name} className="rounded shadow-lg w-full h-auto" />
            <p className="mt-3 font-medium group-hover:text-sky-600">{d.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
} 
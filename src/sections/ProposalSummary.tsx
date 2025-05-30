export default function ProposalSummary() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-cabo-gradient">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Launch?</h2>
      <ul className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-left">
        {[
          'Unique design for every vessel',
          'Mobile-first UX',
          'FareHarbor checkout embedded',
          'SEO & analytics included',
        ].map(i => <li key={i} className="before:content-['✔'] before:text-green-500 before:mr-2">{i}</li>)}
      </ul>
      <p className="mt-8 text-white text-lg font-medium">Next step: pick tiers & schedule kickoff.</p>
    </section>
  );
} 
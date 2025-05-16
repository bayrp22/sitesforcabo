export default function ChooseMatrix() {
  const tiers = ['Private', 'Shared Tour', 'Destination', 'Corporate'];
  const vessels = ['Cabo Wave', 'Pirate Ship', 'Tu Enamorado', 'Escape'];

  return (
    <section className="py-28">
      <h2 className="section-title text-center">Pick Your Fleet & Tier</h2>
      <div className="overflow-x-auto mt-12">
        <table className="mx-auto w-max border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2"></th>
              {tiers.map(t => (
                <th key={t} className="border px-6 py-2">{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vessels.map(v => (
              <tr key={v}>
                <td className="border px-4 py-2 font-semibold">{v}</td>
                {tiers.map(t => (
                  <td key={t} className="border px-6 py-2 text-center">⬜︎</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        Mark the boxes you want & send back before kickoff.
      </p>
    </section>
  );
} 
import { DevicePhoneMobileIcon, ChartBarIcon, ShoppingCartIcon, PaintBrushIcon } from "@heroicons/react/24/solid";

export default function ProposalSummary() {
  const features = [
    {
      icon: PaintBrushIcon,
      text: 'Unique design for every vessel'
    },
    {
      icon: DevicePhoneMobileIcon,
      text: 'Mobile-first UX'
    },
    {
      icon: ShoppingCartIcon,
      text: 'FareHarbor checkout embedded'
    },
    {
      icon: ChartBarIcon,
      text: 'SEO & analytics included'
    }
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-cabo-gradient">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Search Is Over</h2>
      
      {/* Browser Window */}
      <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 max-w-2xl w-full overflow-hidden">
        {/* Browser Header */}
        <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          {/* Window Controls */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="bg-gray-800 rounded px-3 py-1 text-gray-400 text-sm text-center">
              wildcabo.com/your-success
            </div>
          </div>
          
          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Browser Content */}
        <div className="bg-gray-850 p-8 flex justify-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-lg font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-white text-4xl md:text-5xl font-bold">Let's Make It Happen!</p>
    </section>
  );
} 
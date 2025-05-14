import React from 'react';
import SectionContainer from './SectionContainer';
import { ExternalLink } from 'lucide-react';

const sites = [
  // Private & Group column sites
  {
    title: "Template",
    description: "Clean, functional design with customizable elements",
    imageUrl: "/images/templatelandinghero.png",
    textColor: "text-cabo-blue",
    url: "https://wildcabotemplate.netlify.app/"
  },
  {
    title: "Pirate Site",
    description: "Premium design with advanced interactive features",
    imageUrl: "/images/piratelandinghero.png",
    textColor: "text-cabo-blue",
    url: "https://cabopirates.netlify.app/"
  },
  // Destination Funnel column sites
  {
    title: "Template",
    description: "Clean, functional design with customizable elements",
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
    textColor: "text-cyan-700",
    url: "https://wildcabotemplate.netlify.app/"
  },
  {
    title: "Cabo Site",
    description: "Conversion-focused design with clear pathways",
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
    textColor: "text-cyan-700",
    url: "https://caboescape.netlify.app/"
  },
  // Corporate Page column sites
  {
    title: "Template",
    description: "Clean, functional design with customizable elements",
    imageClass: "bg-gradient-to-br from-indigo-100 to-purple-100",
    textColor: "text-indigo-700",
    url: "https://wildcabotemplate.netlify.app/"
  },
  {
    title: "Escape Site",
    description: "Enterprise dashboard for your entire operation",
    imageClass: "bg-gradient-to-br from-indigo-100 to-purple-100",
    textColor: "text-indigo-700",
    url: "https://caboescape.netlify.app/"
  }
];

const SiteDemoSection: React.FC = () => {
  return (
    <SectionContainer id="site-demo" bgColor="bg-gray-50" className="py-16">
      <div className="flex flex-col gap-12">
        {/* Column titles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6">
          <div className="col-span-1 text-center">
            <h2 className="text-3xl font-bold text-cabo-blue mb-6">Private & Group</h2>
          </div>
          <div className="col-span-1 text-center">
            <h2 className="text-3xl font-bold text-cyan-700 mb-6">Destination Funnel</h2>
          </div>
          <div className="col-span-1 text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Corporate Page</h2>
          </div>
        </div>
        
        {/* First row - Template sites */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6">
          {/* Private & Group - Template */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[0]} />
            </div>
          </div>
          
          {/* Destination Funnel - Template */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[2]} />
            </div>
          </div>
          
          {/* Corporate Page - Template */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[4]} />
            </div>
          </div>
        </div>
        
        {/* Second row - Specific sites */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-6 mt-6">
          {/* Private & Group - Pirate Site */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[1]} />
            </div>
          </div>
          
          {/* Destination Funnel - Cabo Site */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[3]} />
            </div>
                </div>
          
          {/* Corporate Page - Escape Site */}
          <div className="col-span-1">
            <div className="w-full mx-auto">
              <SiteDisplay site={sites[5]} />
                  </div>
                </div>
              </div>
      </div>
    </SectionContainer>
  );
};

// Site display without cards
const SiteDisplay = ({ site }: { site: typeof sites[0] }) => {
  const hasImage = 'imageUrl' in site;
  
  return (
    <div className="flex flex-col h-full">
      <h3 className={`text-xl font-bold mb-2 ${site.textColor}`}>{site.title}</h3>
      
      <a 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
      >
        <div 
          className={`aspect-[1.74/1] w-full rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden ${!hasImage ? site.imageClass : ''}`}
        >
          {hasImage && (
            <img 
              src={site.imageUrl} 
              alt={site.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <div className="bg-white p-3 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <ExternalLink className={`w-5 h-5 ${site.textColor}`} />
            </div>
          </div>
        </div>
      </a>
      
      <p className="mt-3 text-gray-600 text-sm">{site.description}</p>
      
      <div className="mt-3">
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${site.textColor} hover:underline flex items-center gap-1 text-sm font-medium`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Visit site</span>
        </a>
      </div>
    </div>
  );
};

export default SiteDemoSection;

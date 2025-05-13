import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const sites = [
  {
    title: "Template Microsite",
    description: "Clean, functional design with customizable elements",
    imageClass: "bg-gradient-to-br from-gray-100 to-gray-200",
    textColor: "text-gray-600",
    url: "https://template-example.com"
  },
  {
    title: "Pirate Package",
    description: "Premium design with advanced interactive features",
    imageClass: "bg-gradient-to-br from-cabo-turquoise/40 to-cabo-blue/40",
    textColor: "text-cabo-blue",
    url: "https://pirate-example.com"
  },
  {
    title: "Escape Route",
    description: "Conversion-focused design with clear pathways",
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
    textColor: "text-cyan-700",
    url: "https://escape-example.com"
  }
];

const SiteDemoSection: React.FC = () => {
  return (
    <SectionContainer id="site-demo" bgColor="bg-gray-50">
      <h2 className="section-title">Live Sites</h2>
      <p className="section-subtitle">Explore our microsite designs in action</p>
      
      <div className="flex flex-col gap-8">
        {/* Top row - Template (wider but scaled down) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3 md:col-start-2">
            <div className="w-3/4 mx-auto">
              <TemplateCard site={sites[0]} />
            </div>
          </div>
        </div>
        
        {/* Bottom row - Pirate and Escape */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pirate Card */}
          <div className="col-span-1">
            <SiteCard site={sites[1]} />
          </div>
          
          {/* Escape Card */}
          <div className="col-span-1">
            <SiteCard site={sites[2]} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

// Template card component - smaller scale
const TemplateCard = ({ site }: { site: typeof sites[0] }) => {
  return (
    <Card className="card overflow-hidden h-full flex flex-col text-sm">
      <CardHeader className="pb-1 px-4 pt-3">
        <CardTitle className="text-base">{site.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-1 px-4">
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <div className={`${site.imageClass} aspect-[1.74/1] w-full rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:shadow-lg`}>
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <div className="bg-white p-2 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className={`w-4 h-4 ${site.textColor}`} />
              </div>
            </div>
            <div className="w-24 h-24 border-3 border-white rounded-lg flex items-center justify-center">
              <div className="text-xl font-bold text-gray-600">
                {site.title.split(' ')[0]}
              </div>
            </div>
          </div>
        </a>
        <p className="mt-2 text-gray-600 text-xs">{site.description}</p>
      </CardContent>
      <CardFooter className="pt-1 pb-3 px-4">
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${site.textColor} hover:underline flex items-center gap-1 text-xs`}
        >
          <ExternalLink className="w-3 h-3" />
          <span>Visit site</span>
        </a>
      </CardFooter>
    </Card>
  );
};

// Regular card component for Pirate and Escape
const SiteCard = ({ site }: { site: typeof sites[0] }) => {
  return (
    <Card className="card overflow-hidden h-full flex flex-col">
      <CardHeader>
        <CardTitle>{site.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <div className={`${site.imageClass} h-48 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:shadow-lg`}>
            <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <div className="bg-white p-3 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className={`w-5 h-5 ${site.textColor}`} />
              </div>
            </div>
            <div className="w-32 h-32 border-4 border-white rounded-lg flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-600">
                {site.title.split(' ')[0]}
              </div>
            </div>
          </div>
        </a>
        <p className="mt-4 text-gray-600">{site.description}</p>
      </CardContent>
      <CardFooter>
        <a 
          href={site.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${site.textColor} hover:underline flex items-center gap-2`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Visit site</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default SiteDemoSection;

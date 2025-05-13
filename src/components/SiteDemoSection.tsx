import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const sites = [
  {
    title: "Template Microsite",
    description: "Clean, functional design with customizable elements",
    imageUrl: "/images/templatelandinghero.png",
    textColor: "text-gray-600",
    url: "https://wildcabotemplate.netlify.app/"
  },
  {
    title: "Pirate Package",
    description: "Premium design with advanced interactive features",
    imageUrl: "/images/piratelandinghero.png",
    textColor: "text-cabo-blue",
    url: "https://cabopirates.netlify.app/"
  },
  {
    title: "Escape Route",
    description: "Conversion-focused design with clear pathways",
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
    textColor: "text-cyan-700",
    url: "https://caboescape.netlify.app/"
  }
];

const SiteDemoSection: React.FC = () => {
  return (
    <SectionContainer id="site-demo" bgColor="bg-gray-50">
      <h2 className="section-title">Site Links</h2>
      
      <div className="flex flex-col gap-8">
        {/* Top row - Template (wider but scaled down) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-3 md:col-start-2">
            <div className="w-3/4 mx-auto">
              <SiteCard site={sites[0]} />
            </div>
          </div>
        </div>
        
        {/* Bottom row - Pirate and Escape */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pirate Card */}
          <div className="col-span-1">
            <div className="w-3/4 mx-auto">
              <SiteCard site={sites[1]} />
            </div>
          </div>
          
          {/* Escape Card */}
          <div className="col-span-1">
            <div className="w-3/4 mx-auto">
              <SiteCard site={sites[2]} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

// Card component for all sites
const SiteCard = ({ site }: { site: typeof sites[0] }) => {
  const hasImage = 'imageUrl' in site;
  
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
              <div className="bg-white p-2 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                <ExternalLink className={`w-4 h-4 ${site.textColor}`} />
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

export default SiteDemoSection;


import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

const sites = [
  {
    title: "Template Microsite",
    description: "Clean, functional design with customizable elements",
    imageClass: "bg-gradient-to-br from-gray-100 to-gray-200",
    iconColor: "text-gray-700"
  },
  {
    title: "Pirate Package",
    description: "Premium design with advanced interactive features",
    imageClass: "bg-gradient-to-br from-cabo-turquoise/40 to-cabo-blue/40",
    iconColor: "text-cabo-blue"
  },
  {
    title: "Escape Route",
    description: "Conversion-focused design with clear pathways",
    imageClass: "bg-gradient-to-br from-cyan-100 to-blue-100",
    iconColor: "text-cyan-700"
  }
];

const SiteDemoSection: React.FC = () => {
  return (
    <SectionContainer id="site-demo" bgColor="bg-gray-50">
      <h2 className="section-title">Site Demos</h2>
      <p className="section-subtitle">Preview our microsite designs and functionality</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sites.map((site, index) => (
          <Card key={index} className="card overflow-hidden h-full flex flex-col">
            <CardHeader>
              <CardTitle>{site.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className={`${site.imageClass} h-48 rounded-lg flex items-center justify-center relative group`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                  <Play className={`w-16 h-16 ${site.iconColor}`} />
                </div>
                <div className="w-32 h-32 border-4 border-white rounded-lg flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-600">
                    {site.title.split(' ')[0]}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{site.description}</p>
            </CardContent>
            <CardFooter>
              <a href="#" className="text-cabo-blue hover:underline flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span>Watch demo</span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

export default SiteDemoSection;

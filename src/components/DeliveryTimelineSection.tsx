import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CircleCheck, CircleX, LayoutList } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    title: "Sprint",
    subtitle: "0",
    cardTitle: "Planning & Setup",
    duration: "Weeks 1-2",
    description: "Initial consultation and design creation",
    hideTasks: true,
    tasks: [
      { name: "Kickoff meeting and requirements gathering", completed: true },
      { name: "User experience wireframing", completed: true },
      { name: "Visual design concepts", completed: true },
      { name: "Client feedback and revisions", completed: false },
      { name: "Design finalization", completed: false }
    ],
    hideContent: true,
    hideNumber: true,
    customLayout: true,
    bulletPoints: {
      left: [
        "Vessel List & Site Tier Selection",
        "Brand ID Portfolio, Pics, & FH Login"
      ],
      right: [
        "Site Planning Matrix",
        "Timeline Lock & Repo Spin Up"
      ]
    }
  },
  {
    title: "Site",
    subtitle: "1",
    cardTitle: "First Build & Launch",
    duration: "Weeks 3-6",
    description: "Building the microsites and functionality",
    hideTasks: true,
    hideContent: false,
    hideNumber: false,
    customLayout: true,
    bulletPoints: {
      left: [
        "Experience Details",
        "Unique Tour Features"
      ],
      right: [
        "Custom Design & Layout",
        "Booking Checkout Integration"
      ]
    }
  },
  {
    title: "Bi-Weekly Rollouts",
    subtitle: "",
    cardTitle: "Remaining Sites",
    duration: "Weeks 7-8",
    description: "Final testing, deployment, and ongoing support",
    hideTasks: true,
    hideContent: false,
    hideNumber: false,
    customLayout: true,
    bulletPoints: {
      left: [
        "Site Specific Assets",
        "Minor Feedback"
      ],
      right: [
        "QA / Launch / Indexing",
        "Custom Integrations"
      ]
    }
  }
];

const DeliveryTimelineSection: React.FC = () => {
  return (
    <SectionContainer id="delivery-timeline" bgColor="bg-gray-100">
      <div className="container mx-auto px-4 mb-24">
        <div className="flex items-center">
          <Calendar className="w-8 h-8 text-cabo-blue mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold">Delivery Timeline</h2>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 px-8 mb-0">
          <div></div>
          <div className="flex justify-start pl-8">
            <span className="text-lg font-semibold text-cabo-blue px-4 py-1 bg-white/80 rounded-full shadow-sm">You Provide</span>
          </div>
          <div className="flex justify-start pl-8">
            <span className="text-lg font-semibold text-cabo-blue px-4 py-1 bg-white/80 rounded-full shadow-sm">We Provide</span>
          </div>
        </div>
        
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            {index !== phases.length - 1 && (
              <div className="absolute left-10 top-40 bottom-0 w-1 bg-gradient-to-b from-cabo-turquoise to-cabo-blue"></div>
            )}
            <div className="pl-8 mb-1">
              <span className="text-lg font-semibold text-gray-800">{phase.cardTitle}</span>
            </div>
            <div className="fade-card-container relative z-10 rounded-lg overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/95 before:via-white/80 before:to-transparent before:rounded-lg before:-z-10 before:shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.1)]">
              <Card className={cn("relative border-0 shadow-none p-8 bg-transparent")}>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-cabo-blue">{phase.title}</h3>
                    <span className="text-5xl font-bold text-cabo-blue">{phase.subtitle}</span>
                  </div>
                  <div className="space-y-4">
                    {phase.bulletPoints?.left.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-cabo-gradient flex-shrink-0"></div>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {phase.bulletPoints?.right.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-cabo-gradient flex-shrink-0"></div>
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default DeliveryTimelineSection;

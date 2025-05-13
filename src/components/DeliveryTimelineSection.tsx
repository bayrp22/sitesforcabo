import React from 'react';
import SectionContainer from './SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CircleCheck, CircleX, LayoutList } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    title: "Phase 1: Planning & Design",
    duration: "Weeks 1-2",
    description: "Initial consultation and design creation",
    hideTasks: true,
    tasks: [
      { name: "Kickoff meeting and requirements gathering", completed: true },
      { name: "User experience wireframing", completed: true },
      { name: "Visual design concepts", completed: true },
      { name: "Client feedback and revisions", completed: false },
      { name: "Design finalization", completed: false }
    ]
  },
  {
    title: "Phase 2: Development",
    duration: "Weeks 3-6",
    description: "Building the microsites and functionality",
    hideTasks: true,
    tasks: [
      { name: "Frontend development", completed: false },
      { name: "Backend integration", completed: false },
      { name: "Content management system setup", completed: false },
      { name: "Responsive design implementation", completed: false },
      { name: "Cross-browser testing", completed: false }
    ]
  },
  {
    title: "Phase 3: Launch & Support",
    duration: "Weeks 7-8",
    description: "Final testing, deployment, and ongoing support",
    hideTasks: true,
    tasks: [
      { name: "Quality assurance testing", completed: false },
      { name: "Content population", completed: false },
      { name: "Performance optimization", completed: false },
      { name: "Launch preparation", completed: false },
      { name: "Training and handoff", completed: false }
    ]
  }
];

const DeliveryTimelineSection: React.FC = () => {
  return (
    <SectionContainer id="delivery-timeline" bgColor="bg-gray-100">
      <div className="flex items-center justify-center mb-4">
        <Calendar className="w-8 h-8 text-cabo-blue mr-3" />
        <h2 className="section-title mb-0">Delivery Timeline</h2>
      </div>
      <p className="section-subtitle">Your project roadmap from concept to launch</p>
      
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {phases.map((phase, index) => (
          <div key={index} className="relative">
            {index !== phases.length - 1 && (
              <div className="absolute left-10 top-32 bottom-0 w-1 bg-gradient-to-b from-cabo-turquoise to-cabo-blue"></div>
            )}
            <div className="fade-card-container relative z-10 rounded-lg overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/95 before:via-white/80 before:to-transparent before:border-l-4 before:border-l-cabo-turquoise before:rounded-l-lg before:-z-10 before:shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.1)]">
              <Card className={cn("relative border-0 shadow-none p-8 bg-transparent")}>
                <CardHeader className="p-0 pb-6">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-cabo-gradient flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-white">{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{phase.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <LayoutList className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-500 text-lg">{phase.duration}</span>
                      </div>
                      <p className="mt-3 text-gray-600 text-lg">{phase.description}</p>
                    </div>
                  </div>
                </CardHeader>
                {!phase.hideTasks && (
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {phase.tasks.map((task, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {task.completed ? (
                            <CircleCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <CircleX className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                          <span className={task.completed ? "text-gray-900" : "text-gray-600"}>
                            {task.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default DeliveryTimelineSection;

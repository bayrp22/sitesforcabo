
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  className, 
  children, 
  bgColor = "bg-white" 
}) => {
  return (
    <section id={id} className={cn(bgColor, className)}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

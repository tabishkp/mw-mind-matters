
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const TimelineIndicator: React.FC<TimelineIndicatorProps> = ({
  currentStep,
  totalSteps,
  className,
}) => {
  return (
    <div className={cn('w-full flex justify-center my-2', className)}>
      <div className="h-1 bg-gray-700 rounded-full w-1/3 relative">
        <div 
          className="h-1 bg-brand-purple rounded-full absolute top-0 left-0 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TimelineIndicator;

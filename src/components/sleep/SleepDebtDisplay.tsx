
import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface SleepDebtDisplayProps {
  debtHours: number;
  className?: string;
  energyPotential?: number;
  recentChange?: {
    hours: number;
    period: string;
  };
}

const SleepDebtDisplay: React.FC<SleepDebtDisplayProps> = ({
  debtHours,
  className,
  energyPotential = 36,
  recentChange = { hours: 3.2, period: 'Since yesterday' },
}) => {
  // Calculate progress (higher debt = less progress)
  // Use a scale where 0 debt = 100% and 20+ hours debt = 0%
  const maxDebt = 20;
  const progressValue = Math.max(0, Math.min(100, 100 - (debtHours / maxDebt) * 100));
  
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex w-full justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <span className="text-gray-300">OKAY 12</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-gray-300">GREAT 5</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-gray-300">SUPER 0</span>
        </div>
      </div>
      
      <div className="relative flex justify-center">
        {/* Left semi-circular progress bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4">
          <div className="h-full w-4 rounded-l-full bg-gray-800 overflow-hidden relative">
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-pink-500"
              style={{ height: `${progressValue}%` }}
            />
          </div>
        </div>
        
        {/* Central circle */}
        <div className="w-64 h-64 rounded-full bg-gray-900/80 border border-gray-800 flex flex-col items-center justify-center text-center z-10">
          <div className="text-7xl font-light mb-2">{debtHours}</div>
          <div className="text-3xl">hrs</div>
          <div className="text-2xl text-gray-300">Sleep debt</div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        {/* Sleep debt since yesterday */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 w-6 h-6 rounded-lg flex items-center justify-center text-white">
              +
            </div>
            <span className="font-medium text-xl">{recentChange.hours}hrs debt</span>
          </div>
          <div className="text-gray-400 mt-1">{recentChange.period}</div>
        </div>
        
        {/* Energy potential */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-3 flex-1 ml-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Energy Potential</div>
              <div className="text-xl text-red-400">{energyPotential}%</div>
            </div>
            <div className="text-gray-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepDebtDisplay;

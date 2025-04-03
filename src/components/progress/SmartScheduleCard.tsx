
import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface SmartScheduleCardProps {
  daysToGreat: number;
  onClick?: () => void;
}

const SmartScheduleCard: React.FC<SmartScheduleCardProps> = ({ 
  daysToGreat,
  onClick 
}) => {
  return (
    <div 
      className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div>
        <h3 className="font-medium">Smart Schedule</h3>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          <div className="h-5 w-5 rounded-full border-2 border-brand-purple flex items-center justify-center bg-transparent mr-1">
            <Clock className="text-brand-purple" size={12} />
          </div>
          <span className="text-brand-purple text-sm">GREAT IN <span className="font-bold">{daysToGreat}</span> days</span>
        </div>
        <ArrowRight size={18} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SmartScheduleCard;

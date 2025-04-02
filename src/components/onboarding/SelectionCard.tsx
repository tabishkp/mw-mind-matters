
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface SelectionCardProps {
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  selected,
  onClick,
  icon,
  title,
  description,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 rounded-xl transition-all relative mb-3',
        selected ? 'bg-brand-purple/20 border-2 border-brand-purple' : 'bg-gray-800/50 border border-gray-700',
        className
      )}
    >
      <div className="flex items-start">
        {icon && <span className="mr-3 text-2xl">{icon}</span>}
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          {description && <p className="text-sm text-gray-300 mt-1">{description}</p>}
        </div>
        <div className="ml-auto">
          {selected ? (
            <div className="h-6 w-6 rounded-full flex items-center justify-center bg-brand-purple">
              <Check size={16} className="text-white" />
            </div>
          ) : (
            <div className="h-6 w-6 rounded-full border border-gray-500"></div>
          )}
        </div>
      </div>
    </button>
  );
};

export default SelectionCard;

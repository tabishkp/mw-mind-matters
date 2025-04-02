
import React from 'react';
import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  hasReminder?: boolean;
  largeCard?: boolean;
  className?: string;
  link?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  icon,
  iconColor = 'bg-gradient-purple',
  hasReminder = false,
  largeCard = false,
  className,
  link
}) => {
  const renderContent = () => (
    <div className={cn(
      'rounded-xl overflow-hidden relative transition-all',
      largeCard ? 'p-4' : 'aspect-square p-3',
      className
    )}>
      {/* Icon */}
      <div 
        className={cn(
          'rounded-xl flex items-center justify-center',
          largeCard ? 'h-16 w-16 mb-3' : 'h-12 w-12 mb-2',
          iconColor
        )}
      >
        {icon}
      </div>
      
      {/* Title & Description */}
      <div>
        <h3 className={cn(
          'font-medium text-white',
          largeCard ? 'text-lg' : 'text-sm'
        )}>
          {title}
        </h3>
        {description && (
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        )}
      </div>
      
      {/* Reminder Bell */}
      {hasReminder && (
        <div className="absolute top-3 right-3">
          <Bell size={16} className="text-white" />
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        {renderContent()}
      </Link>
    );
  }
  
  return renderContent();
};

export default ToolCard;

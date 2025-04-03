
import React from 'react';
import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SleepScienceTipProps {
  title: string;
  description: string;
  actionText: string;
  actionPath: string;
  icon?: React.ReactNode;
}

const SleepScienceTip: React.FC<SleepScienceTipProps> = ({
  title,
  description,
  actionText,
  actionPath,
  icon
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-sm opacity-90 mb-4">
            {description}
          </p>
          <Button 
            onClick={() => navigate(actionPath)} 
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30"
          >
            {actionText}
          </Button>
        </div>
        <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
          {icon || <Moon className="text-white" size={36} />}
        </div>
      </div>
    </div>
  );
};

export default SleepScienceTip;

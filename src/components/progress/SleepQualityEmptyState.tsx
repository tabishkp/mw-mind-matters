
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface SleepQualityEmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionPath?: string;
}

const SleepQualityEmptyState: React.FC<SleepQualityEmptyStateProps> = ({
  title = "Track Sleep Quality",
  description = "Rate how you feel each morning to analyze what affects your sleep.",
  actionText = "Rate Today's Sleep",
  actionPath = "/tools/sleep-quality"
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center h-60">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Button onClick={() => navigate(actionPath)} className="bg-brand-purple">
          {actionText}
        </Button>
      </div>
    </div>
  );
};

export default SleepQualityEmptyState;

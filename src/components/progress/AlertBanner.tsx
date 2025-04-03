
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  message: string;
  actionText?: string;
  variant?: 'warning' | 'error' | 'info';
}

const AlertBanner: React.FC<AlertBannerProps> = ({ 
  message, 
  actionText,
  variant = 'warning'
}) => {
  const bgColor = variant === 'error' 
    ? 'bg-red-900/40 border-red-800' 
    : variant === 'info' 
      ? 'bg-blue-900/40 border-blue-800' 
      : 'bg-red-900/40 border-red-800';
  
  const iconBgColor = variant === 'error'
    ? 'bg-red-700'
    : variant === 'info'
      ? 'bg-blue-700'
      : 'bg-red-700';
  
  return (
    <div className={`${bgColor} border rounded-lg py-2 px-4 mb-6 flex items-center`}>
      <div className={`${iconBgColor} rounded-full p-1 mr-2`}>
        <AlertTriangle size={16} className="text-white" />
      </div>
      <div className="text-white">
        {message} {actionText && <span className="text-brand-purple">{actionText}</span>}
      </div>
    </div>
  );
};

export default AlertBanner;

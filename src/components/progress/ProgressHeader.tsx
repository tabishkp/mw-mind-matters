
import React from 'react';
import { Gift, User } from 'lucide-react';

interface ProgressHeaderProps {
  title: string;
  subtitle: string;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="py-6 px-6 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-400">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Gift className="text-brand-purple" size={24} />
          <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            2
          </span>
        </button>
        <button>
          <User className="text-gray-400" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProgressHeader;

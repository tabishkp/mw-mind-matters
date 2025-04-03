
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RecordListItemProps {
  label: string;
  sublabel: string;
  value: string;
  onClick?: () => void;
}

const RecordListItem: React.FC<RecordListItemProps> = ({
  label,
  sublabel,
  value,
  onClick
}) => {
  return (
    <div 
      className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center"
      onClick={onClick}
    >
      <div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-white">{sublabel}</div>
      </div>
      <div className="text-white text-lg font-medium">{value}</div>
      <ArrowRight size={18} className="text-gray-500" />
    </div>
  );
};

export default RecordListItem;

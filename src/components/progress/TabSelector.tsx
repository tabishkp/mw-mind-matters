
import React from 'react';

export type ProgressTab = 'times' | 'debt' | 'quality';

interface TabSelectorProps {
  activeTab: ProgressTab;
  onChange: (tab: ProgressTab) => void;
  tabs: Array<{
    id: ProgressTab;
    label: string;
  }>;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  activeTab,
  onChange,
  tabs
}) => {
  return (
    <div className="flex rounded-lg bg-gray-800 mb-6">
      {tabs.map(tab => (
        <button 
          key={tab.id}
          className={`flex-1 py-3 rounded-lg ${activeTab === tab.id ? 'bg-brand-purple text-white' : 'text-gray-400'} font-medium`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;

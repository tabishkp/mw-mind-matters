
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ToggleSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const ToggleSelector: React.FC<ToggleSelectorProps> = ({
  value,
  onValueChange,
  options
}) => {
  return (
    <div className="flex justify-center mb-4">
      <ToggleGroup 
        type="single" 
        value={value} 
        onValueChange={(val) => val && onValueChange(val)}
      >
        {options.map(option => (
          <ToggleGroupItem key={option.value} value={option.value} className="text-sm">
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default ToggleSelector;

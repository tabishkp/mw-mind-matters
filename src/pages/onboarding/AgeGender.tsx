
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, User } from 'lucide-react';
import TimelineIndicator from '@/components/ui/timeline-indicator';
import SelectionCard from '@/components/onboarding/SelectionCard';
import { useUser, AgeRange } from '@/contexts/UserContext';

interface AgeGenderProps {
  setHasCompletedOnboarding: (value: boolean) => void;
}

const AgeGender: React.FC<AgeGenderProps> = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const { ageRange, setAgeRange, gender, setGender } = useUser();
  
  const handleContinue = () => {
    navigate('/onboarding/goals');
  };

  const handleSkip = () => {
    navigate('/onboarding/goals');
  };

  const ageRanges: AgeRange[] = [
    "Under 18",
    "18-23",
    "24-29",
    "30-39",
    "40-49",
    "50-59",
    "60+"
  ];

  const ageDescriptions: Record<AgeRange, string> = {
    "Under 18": "Growing teens need more sleep as bodies and brains develop.",
    "18-23": "Young adults require 7-9 hours of sleep for optimal performance.",
    "24-29": "After age 20, our biological clocks adjust our sleep and wake times earlier.",
    "30-39": "Adults in this range often face work-life balance sleep challenges.",
    "40-49": "Hormonal changes may begin to affect sleep patterns.",
    "50-59": "Sleep architecture changes with deeper sleep becoming more difficult.",
    "60+": "Older adults may experience shorter sleep duration and earlier wake times."
  };

  return (
    <div className="min-h-screen dark-gradient p-6">
      <div className="max-w-md mx-auto pt-8">
        <div className="flex items-center mb-2">
          <User className="h-8 w-8 text-brand-purple mr-2" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <h2 className="text-2xl font-medium text-brand-purple mb-8">Gender & Age</h2>
        
        <TimelineIndicator currentStep={1} totalSteps={5} />
        
        <div className="my-8">
          <h3 className="text-xl text-white mb-2">What's your age?</h3>
          <p className="text-gray-400 mb-6">Your sleep needs change with age. Knowing your age helps us offer better guidance.</p>
          
          <div className="space-y-2">
            {ageRanges.map((age) => (
              <SelectionCard
                key={age}
                selected={ageRange === age}
                onClick={() => setAgeRange(age)}
                title={age}
                description={ageDescriptions[age]}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={handleContinue} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
            disabled={!ageRange}
          >
            Save & Continue
            <ArrowRight className="ml-2" size={16} />
          </Button>
          
          <button 
            onClick={handleSkip} 
            className="w-full text-brand-purple py-4 mt-4"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGender;

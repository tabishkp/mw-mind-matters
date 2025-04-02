
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, FileEdit, Pill, BatteryCharging, Bed, Wine, Headphones, Smartphone } from 'lucide-react';
import TimelineIndicator from '@/components/ui/timeline-indicator';
import SelectionCard from '@/components/onboarding/SelectionCard';
import { useUser, SleepPractice } from '@/contexts/UserContext';

interface SleepPracticesProps {
  setHasCompletedOnboarding: (value: boolean) => void;
}

const SleepPractices: React.FC<SleepPracticesProps> = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const { sleepPractices, setSleepPractices } = useUser();
  
  const handlePracticeToggle = (practice: SleepPractice) => {
    if (sleepPractices.includes(practice)) {
      setSleepPractices(sleepPractices.filter(p => p !== practice));
    } else {
      setSleepPractices([...sleepPractices, practice]);
    }
  };

  const handleContinue = () => {
    navigate('/onboarding/data');
  };

  const handleSkip = () => {
    navigate('/onboarding/data');
  };

  const practiceOptions: {practice: SleepPractice; icon: React.ReactNode}[] = [
    {
      practice: "Journaling or to-do list",
      icon: <FileEdit size={24} className="text-white" />
    },
    {
      practice: "Melatonin Supplements",
      icon: <Pill size={24} className="text-white" />
    },
    {
      practice: "Winding down",
      icon: <BatteryCharging size={24} className="text-white" />
    },
    {
      practice: "Comfortable bedroom",
      icon: <Bed size={24} className="text-white" />
    },
    {
      practice: "Alcohol",
      icon: <Wine size={24} className="text-white" />
    },
    {
      practice: "Relaxation techniques & sounds",
      icon: <Headphones size={24} className="text-white" />
    },
    {
      practice: "Limiting screen time",
      icon: <Smartphone size={24} className="text-white" />
    }
  ];

  return (
    <div className="min-h-screen dark-gradient p-6 pb-20">
      <div className="max-w-md mx-auto pt-8">
        <div className="flex items-center mb-2">
          <User className="h-8 w-8 text-brand-purple mr-2" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <h2 className="text-2xl font-medium text-indigo-400 mb-8">Sleep practices</h2>
        
        <TimelineIndicator currentStep={4} totalSteps={5} />
        
        <div className="my-8">
          {practiceOptions.map((option) => (
            <SelectionCard
              key={option.practice}
              selected={sleepPractices.includes(option.practice)}
              onClick={() => handlePracticeToggle(option.practice)}
              icon={option.icon}
              title={option.practice}
            />
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={handleContinue} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
          >
            Save & Continue
            <ArrowRight className="ml-2" size={16} />
          </Button>
          
          <button 
            onClick={handleSkip} 
            className="w-full text-brand-purple py-4 mt-4"
          >
            Skip, none of these apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SleepPractices;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, Dumbbell, Moon, SmilePlus, Star } from 'lucide-react';
import TimelineIndicator from '@/components/ui/timeline-indicator';
import SelectionCard from '@/components/onboarding/SelectionCard';
import { useUser, Goal } from '@/contexts/UserContext';

interface GoalsProps {
  setHasCompletedOnboarding: (value: boolean) => void;
}

const Goals: React.FC<GoalsProps> = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const { goals, setGoals } = useUser();
  
  const handleGoalToggle = (goal: Goal) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const handleContinue = () => {
    navigate('/onboarding/lifestyle');
  };

  const handleSkip = () => {
    navigate('/onboarding/lifestyle');
  };

  const goalOptions: {goal: Goal; icon: React.ReactNode; description: string}[] = [
    {
      goal: "Improve sleep quality",
      icon: <LineChart size={24} className="text-white" />,
      description: "Discover your body's ideal time to fall asleep for higher sleep quality and more energy."
    },
    {
      goal: "Optimize my fitness",
      icon: <Dumbbell size={24} className="text-white" />,
      description: "Mind Matters can help you find the optimal time to exercise based on your body and goals."
    },
    {
      goal: "Fix my sleep schedule",
      icon: <Moon size={24} className="text-white" />,
      description: "Rediscover your natural sleep-wake cycle, for clarity and control amidst a busy life."
    },
    {
      goal: "Reduce anxiety",
      icon: <SmilePlus size={24} className="text-white" />,
      description: "Losing just 1 hour of sleep a night for a week can cause anxiety to reach clinical levels."
    },
    {
      goal: "Feel less exhausted",
      icon: <Star size={24} className="text-white" />,
      description: "Learn techniques to maximize your energy and reduce chronic fatigue."
    }
  ];

  return (
    <div className="min-h-screen dark-gradient p-6">
      <div className="max-w-md mx-auto pt-8">
        <div className="flex items-center mb-2">
          <User className="h-8 w-8 text-brand-purple mr-2" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <h2 className="text-2xl font-medium text-yellow-400 mb-8">Goals</h2>
        
        <TimelineIndicator currentStep={2} totalSteps={5} />
        
        <div className="my-8">
          {goalOptions.map((option) => (
            <SelectionCard
              key={option.goal}
              selected={goals.includes(option.goal)}
              onClick={() => handleGoalToggle(option.goal)}
              icon={option.icon}
              title={option.goal}
              description={option.description}
            />
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={handleContinue} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
            disabled={goals.length === 0}
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

export default Goals;

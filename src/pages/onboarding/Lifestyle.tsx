
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, BookOpen, Briefcase, Heart, Frown, Target, Bed } from 'lucide-react';
import TimelineIndicator from '@/components/ui/timeline-indicator';
import SelectionCard from '@/components/onboarding/SelectionCard';
import { useUser, Challenge } from '@/contexts/UserContext';

interface LifestyleProps {
  setHasCompletedOnboarding: (value: boolean) => void;
}

const Lifestyle: React.FC<LifestyleProps> = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const { challenges, setChallenges } = useUser();
  
  const handleChallengeToggle = (challenge: Challenge) => {
    if (challenges.includes(challenge)) {
      setChallenges(challenges.filter(c => c !== challenge));
    } else {
      setChallenges([...challenges, challenge]);
    }
  };

  const handleContinue = () => {
    navigate('/onboarding/sleep-practices');
  };

  const handleSkip = () => {
    navigate('/onboarding/sleep-practices');
  };

  const challengeOptions: {challenge: Challenge; icon: React.ReactNode; description?: string}[] = [
    {
      challenge: "Studying or academic pressure",
      icon: <BookOpen size={24} className="text-white" />
    },
    {
      challenge: "New job or work stress",
      icon: <Briefcase size={24} className="text-white" />
    },
    {
      challenge: "Health changes or concerns",
      icon: <Heart size={24} className="text-white" />
    },
    {
      challenge: "Difficulty falling asleep",
      icon: <Frown size={24} className="text-white" />
    },
    {
      challenge: "ADHD",
      icon: <Target size={24} className="text-white" />,
      description: "Nearly 1 in 5 Mind Matters users have ADHD. We'll help you find the best times to focus."
    },
    {
      challenge: "Difficult sleep environment",
      icon: <Bed size={24} className="text-white" />
    }
  ];

  return (
    <div className="min-h-screen dark-gradient p-6">
      <div className="max-w-md mx-auto pt-8">
        <div className="flex items-center mb-2">
          <User className="h-8 w-8 text-brand-purple mr-2" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <h2 className="text-2xl font-medium text-orange-400 mb-8">Lifestyle & Challenges</h2>
        
        <TimelineIndicator currentStep={3} totalSteps={5} />
        
        <div className="my-8">
          {challengeOptions.map((option) => (
            <SelectionCard
              key={option.challenge}
              selected={challenges.includes(option.challenge)}
              onClick={() => handleChallengeToggle(option.challenge)}
              icon={option.icon}
              title={option.challenge}
              description={option.description}
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

export default Lifestyle;

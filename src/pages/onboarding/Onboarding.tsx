
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, ArrowRight, BarChart2, Activity, Database } from 'lucide-react';
import { User, Pill } from '@/components/ui/lucide-icons';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-4 text-left flex items-center"
  >
    <div className="h-10 w-10 rounded-full bg-brand-purple flex items-center justify-center mr-3">
      {icon}
    </div>
    <div className="flex-grow">
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <ArrowRight size={18} className="text-gray-400" />
  </button>
);

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen dark-gradient p-6">
      <div className="flex items-center justify-center mb-8 pt-8">
        <Moon className="h-8 w-8 text-brand-purple mr-2" />
        <h1 className="text-2xl font-bold text-white">Mind Matters</h1>
      </div>
      
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-medium text-white mb-6">Complete your profile</h2>
        
        <StepCard
          icon={<User size={18} className="text-white" />}
          title="Gender & Age"
          description="Helps us tailor recommendations for your body"
          onClick={() => navigate('/onboarding/age-gender')}
        />
        
        <StepCard
          icon={<BarChart2 size={18} className="text-white" />}
          title="Goals"
          description="What do you want to achieve with your sleep?"
          onClick={() => navigate('/onboarding/goals')}
        />
        
        <StepCard
          icon={<Activity size={18} className="text-white" />}
          title="Lifestyle & Challenges"
          description="Help us understand what affects your sleep"
          onClick={() => navigate('/onboarding/lifestyle')}
        />
        
        <StepCard
          icon={<Pill size={18} className="text-white" />}
          title="Sleep Practices"
          description="Tell us about your current sleep habits"
          onClick={() => navigate('/onboarding/sleep-practices')}
        />
        
        <StepCard
          icon={<Database size={18} className="text-white" />}
          title="Data & Insights"
          description="Connect health data for personalized insights"
          onClick={() => navigate('/onboarding/data')}
        />
        
        <div className="mt-8">
          <Button 
            onClick={() => navigate('/onboarding/age-gender')} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
          >
            Start Profile Setup
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

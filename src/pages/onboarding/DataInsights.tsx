
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Smartphone, Check, Repeat } from 'lucide-react';
import TimelineIndicator from '@/components/ui/timeline-indicator';
import { useUser } from '@/contexts/UserContext';
import { useToast } from '@/hooks/use-toast';

interface DataInsightsProps {
  setHasCompletedOnboarding: (value: boolean) => void;
}

const DataInsights: React.FC<DataInsightsProps> = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleConnectDevice = () => {
    setIsLoading(true);
    
    // Simulate connection delay
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      toast({
        title: "Phone connected",
        description: "Your phone's motion data will now be used for sleep tracking",
      });
    }, 1500);
  };

  const handleContinue = () => {
    localStorage.setItem("onboarding-completed", "true");
    setHasCompletedOnboarding(true);
    navigate('/sleep');
  };

  const handleSkip = () => {
    localStorage.setItem("onboarding-completed", "true");
    setHasCompletedOnboarding(true);
    navigate('/sleep');
  };

  const insightItems = [
    {
      text: "Steps",
      isActive: isConnected,
    },
    {
      text: "Exercise minutes",
      isActive: isConnected,
    },
    {
      text: "Workouts",
      isActive: isConnected,
    },
    {
      text: "Sleep",
      isActive: isConnected,
    },
    {
      text: "Phone tracking",
      isActive: isConnected,
    }
  ];

  return (
    <div className="min-h-screen dark-gradient p-6">
      <div className="max-w-md mx-auto pt-8">
        <div className="flex items-center mb-2">
          <User className="h-8 w-8 text-brand-purple mr-2" />
          <h1 className="text-xl font-bold text-white">Profile</h1>
        </div>
        <h2 className="text-2xl font-medium text-gray-400 mb-8">Data & insights</h2>
        
        <TimelineIndicator currentStep={5} totalSteps={5} />
        
        <div className="my-8">
          <h3 className="text-xl text-white mb-6">Data sources</h3>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Smartphone className="h-6 w-6 text-teal-400 mr-2" />
                <span className="text-white">Phone</span>
              </div>
              <Repeat className="h-5 w-5 text-teal-400" />
            </div>
            
            <div className="border-b border-gray-700 mb-4"></div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Smartphone className="h-6 w-6 text-teal-400 mr-2" />
                <span className="text-white">Phone motion</span>
                {isConnected && <Check className="h-5 w-5 text-teal-400 ml-auto" />}
              </div>
              
              <div>
                {insightItems.map((item, index) => (
                  <div key={index} className="flex items-center py-1 pl-8">
                    {item.isActive && <Check className="h-5 w-5 text-teal-400 mr-2" />}
                    <span className={item.isActive ? "text-white" : "text-gray-500"}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <h4 className="text-lg text-white mb-3">My insights</h4>
            <p className="text-teal-400 text-sm mb-1">Discover patterns.</p>
            <p className="text-gray-400 text-sm">Your data reveals a unique sleep & energy history.</p>
            
            <div className="mt-6">
              <h5 className="text-white flex items-center mb-2">
                Sleep need
                {isConnected && <Check className="h-5 w-5 text-teal-400 ml-auto" />}
              </h5>
              
              {isConnected && (
                <div className="text-gray-400 text-sm space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-teal-400 mr-2" />
                    <span>Found early & late days</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-teal-400 mr-2" />
                    <span>Average the difference</span>
                  </div>
                </div>
              )}
            </div>
            
            {isConnected ? (
              <Button
                className="w-full bg-brand-purple hover:bg-purple-600 mt-6 font-medium py-4"
                onClick={() => {}}
              >
                View My Sleep Need
              </Button>
            ) : (
              <Button
                className="w-full bg-gray-700 hover:bg-gray-600 mt-6 font-medium py-4"
                disabled
              >
                Connect a device first
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          {isConnected ? (
            <Button 
              onClick={handleContinue} 
              className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
            >
              Complete Setup
              <ArrowRight className="ml-2" size={16} />
            </Button>
          ) : (
            <Button 
              onClick={handleConnectDevice} 
              className={`w-full ${isLoading ? 'bg-gray-600' : 'bg-teal-600 hover:bg-teal-500'} text-white font-medium py-5`}
              disabled={isLoading}
            >
              {isLoading ? 'Connecting...' : 'Connect Phone'}
            </Button>
          )}
          
          <button 
            onClick={handleSkip} 
            className="w-full text-brand-purple py-4 mt-4"
          >
            {isConnected ? 'Skip for now' : 'Skip, I\'ll do this later'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;

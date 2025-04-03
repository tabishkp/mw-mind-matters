
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const MelatoninWindow: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Reminder set",
      description: "We'll notify you when your melatonin window begins.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121520] text-white p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="mr-2 text-gray-400"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-xl font-bold">Melatonin Window</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-indigo-800 flex items-center justify-center mb-4">
          <Moon className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your Melatonin Window</h2>
        <p className="text-gray-300">
          The optimal time to fall asleep aligned with your body's natural rhythm
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Tonight</h3>
          <div className="text-xl font-bold text-brand-purple">10:30 PM - 11:30 PM</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          Your melatonin window is the optimal time to fall asleep. Going to bed during this window helps you fall asleep faster and get higher quality sleep.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            <span>Remind me</span>
          </div>
          <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-gray-400" />
            <span>30 minutes before window</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">About Your Melatonin Window</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Your brain naturally releases melatonin during this window to signal that it's time to sleep</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Going to bed at the right time trains your circadian rhythm for consistent sleep</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Avoiding screens 1-2 hours before this window enhances natural melatonin production</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={handleSetReminder}
          className="w-full bg-brand-purple hover:bg-purple-600"
        >
          Set Reminder
        </Button>
      </div>
    </div>
  );
};

export default MelatoninWindow;

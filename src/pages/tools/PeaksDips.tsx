
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const PeaksDips: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Energy reminder set",
      description: "We'll notify you about your energy peaks and dips.",
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
        <h1 className="text-xl font-bold">Energy Peaks & Dips</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-red-800 flex items-center justify-center mb-4">
          <TrendingUp className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your Energy Schedule</h2>
        <p className="text-gray-300">
          Align your activities with your natural energy patterns
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h3 className="text-lg font-medium mb-4">Today's Forecast</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-700/60 flex items-center justify-center mr-2">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Morning Peak</span>
              </div>
              <div className="text-brand-purple">9:00 AM - 11:00 AM</div>
            </div>
            <p className="text-sm text-gray-300">
              Ideal for focused work and complex tasks.
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-amber-700/60 flex items-center justify-center mr-2">
                  <TrendingUp className="h-4 w-4 text-white rotate-180" />
                </div>
                <span className="font-medium">Afternoon Dip</span>
              </div>
              <div className="text-brand-purple">1:30 PM - 3:00 PM</div>
            </div>
            <p className="text-sm text-gray-300">
              Schedule breaks or lighter tasks during this period.
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-700/60 flex items-center justify-center mr-2">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Afternoon Peak</span>
              </div>
              <div className="text-brand-purple">4:00 PM - 6:00 PM</div>
            </div>
            <p className="text-sm text-gray-300">
              Second wind for productivity and exercise.
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-amber-700/60 flex items-center justify-center mr-2">
                  <TrendingUp className="h-4 w-4 text-white rotate-180" />
                </div>
                <span className="font-medium">Evening Wind Down</span>
              </div>
              <div className="text-brand-purple">8:30 PM - 10:30 PM</div>
            </div>
            <p className="text-sm text-gray-300">
              Natural melatonin production increases. Prepare for sleep.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-gray-400" />
              <span>Energy notifications</span>
            </div>
            <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Energy Management Tips</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Schedule your most demanding tasks during energy peaks</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Take short breaks during energy dips instead of caffeine</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Light exposure in the morning helps reset and strengthen your rhythm</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={handleSetReminder}
          className="w-full bg-brand-purple hover:bg-purple-600"
        >
          Set Reminders
        </Button>
      </div>
    </div>
  );
};

export default PeaksDips;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Pill, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const MelatoninSupplements: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Reminder set",
      description: "We'll notify you when it's time to take melatonin.",
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
        <h1 className="text-xl font-bold">Melatonin Supplements</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-purple-800 flex items-center justify-center mb-4">
          <Pill className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Melatonin Supplements</h2>
        <p className="text-gray-300">
          Temporarily strengthen your natural melatonin window
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recommended Time</h3>
          <div className="text-xl font-bold text-brand-purple">9:30 PM</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          For optimal results, take a low dose (0.5-1mg) of melatonin approximately 1 hour before your target bedtime.
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
            <span>1 hour before bedtime</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5 mb-6">
        <h3 className="text-lg font-medium mb-2">Sleep+ with Melatonin</h3>
        <p className="text-sm opacity-90 mb-4">
          Our specially formulated sleep supplement combines low-dose melatonin with magnesium for optimal sleep quality.
        </p>
        <Button 
          variant="secondary" 
          className="bg-white/20 hover:bg-white/30"
        >
          Shop Now
        </Button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Melatonin Tips</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Smaller doses (0.5-1mg) are equally effective as higher doses</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Use short-term or cyclically rather than every night</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Not recommended for children or pregnant/breastfeeding women</span>
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

export default MelatoninSupplements;

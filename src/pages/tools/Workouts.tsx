
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Dumbbell, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Workouts: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Workout cutoff reminder set",
      description: "We'll remind you about your workout cutoff time.",
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
        <h1 className="text-xl font-bold">Workout Timing</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-emerald-800 flex items-center justify-center mb-4">
          <Dumbbell className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Exercise Cutoff Time</h2>
        <p className="text-gray-300">
          Know when to finish intense workouts for better sleep
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recommended Cutoff</h3>
          <div className="text-xl font-bold text-brand-purple">7:30 PM</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          Intense exercise raises core body temperature and stimulates your nervous system. Finishing workouts at least 2-3 hours before bedtime helps your body cool down and prepare for sleep.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            <span>Workout reminder</span>
          </div>
          <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Exercise & Sleep Facts</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Regular exercise can improve sleep quality and duration</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Intense workouts close to bedtime can delay sleep onset</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Light stretching or yoga in the evening can promote relaxation</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Morning exercise helps set your circadian rhythm for better sleep at night</span>
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

export default Workouts;

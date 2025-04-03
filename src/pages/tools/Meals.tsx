
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UtensilsCrossed, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Meals: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Meal timing reminder set",
      description: "We'll remind you about your last meal timing.",
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
        <h1 className="text-xl font-bold">Meal Timing</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-teal-800 flex items-center justify-center mb-4">
          <UtensilsCrossed className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Last Meal Timing</h2>
        <p className="text-gray-300">
          Optimize when you eat your last meal for better sleep
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recommended Last Meal</h3>
          <div className="text-xl font-bold text-brand-purple">7:00 PM</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          Having your last substantial meal 2-3 hours before bedtime allows your digestive system to settle and helps prevent sleep disruption due to digestion.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            <span>Daily reminder</span>
          </div>
          <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Meal Timing Tips</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Avoid heavy, rich, or spicy foods within 3 hours of bedtime</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">If hungry before bed, choose a small protein-based snack</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Limit fluids 1-2 hours before bed to prevent nighttime awakenings</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Sleep-promoting foods include kiwi, tart cherries, fatty fish, and nuts</span>
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

export default Meals;

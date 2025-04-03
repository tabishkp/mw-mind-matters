
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Sun, Coffee, Droplets, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Morning: React.FC = () => {
  const navigate = useNavigate();

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
        <h1 className="text-xl font-bold">Morning Routine</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-orange-700 flex items-center justify-center mb-4">
          <Sun className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Morning Ritual</h2>
        <p className="text-gray-300">
          Start your day right to strengthen your circadian rhythm
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h3 className="text-lg font-medium mb-4">Recommended Routine</h3>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-yellow-700/60 flex items-center justify-center mr-3">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Morning Light Exposure</h3>
                <p className="text-xs text-brand-purple">Within 30 mins of waking</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Get at least 5-10 minutes of natural sunlight to reset your circadian rhythm.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-700/60 flex items-center justify-center mr-3">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Hydration</h3>
                <p className="text-xs text-brand-purple">First thing in morning</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Drink a full glass of water to rehydrate after the night.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-amber-700/60 flex items-center justify-center mr-3">
                <Coffee className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Planned Caffeine</h3>
                <p className="text-xs text-brand-purple">No earlier than 9:00 AM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Wait 60-90 minutes after waking for caffeine consumption.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-green-700/60 flex items-center justify-center mr-3">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Morning Movement</h3>
                <p className="text-xs text-brand-purple">Before 10:00 AM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Light exercise or stretching to energize your body.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">Morning Routine Benefits</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Light exposure resets your circadian rhythm for better sleep later</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Consistent routine reinforces your body's natural rhythms</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Morning exercise improves nighttime sleep quality</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Button 
          className="w-full bg-brand-purple hover:bg-purple-600"
        >
          Customize My Routine
        </Button>
      </div>
    </div>
  );
};

export default Morning;

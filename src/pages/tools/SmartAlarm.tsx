
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmartAlarm: React.FC = () => {
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
        <h1 className="text-xl font-bold">Smart Alarm</h1>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h2 className="text-lg font-medium mb-3">Wake up at the optimal time</h2>
        <p className="text-gray-300 mb-4">
          The Smart Alarm wakes you during light sleep phases to help you feel more refreshed and less groggy.
        </p>
        
        <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
          <h3 className="font-medium mb-2">Current alarm</h3>
          <p className="text-2xl font-bold text-brand-purple">10:15 AM</p>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-xs">M</span>
            <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-xs">T</span>
            <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-xs">W</span>
            <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">T</span>
            <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">F</span>
            <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">S</span>
            <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full text-xs">S</span>
          </div>
        </div>

        <Button 
          className="w-full bg-brand-purple hover:bg-purple-600"
          onClick={() => {}}
        >
          Set Smart Alarm
        </Button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">Smart Alarm Benefits</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Wake up during light sleep to reduce morning grogginess</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Track your sleep quality over time</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Gradually wake up with gentle sounds that increase in volume</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmartAlarm;

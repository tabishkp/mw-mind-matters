
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Moon, Book, Bath, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Evening: React.FC = () => {
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
        <h1 className="text-xl font-bold">Evening Routine</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-indigo-900 flex items-center justify-center mb-4">
          <Moon className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Evening Ritual</h2>
        <p className="text-gray-300">
          Create a consistent routine to prepare your body for sleep
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h3 className="text-lg font-medium mb-4">Recommended Routine</h3>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-purple-900/60 flex items-center justify-center mr-3">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Digital Sunset</h3>
                <p className="text-xs text-brand-purple">8:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Put away electronics or use blue light filters/glasses.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-900/60 flex items-center justify-center mr-3">
                <Bath className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Warm Bath or Shower</h3>
                <p className="text-xs text-brand-purple">9:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              The subsequent body temperature drop promotes sleepiness.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-indigo-900/60 flex items-center justify-center mr-3">
                <Book className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Reading or Relaxation</h3>
                <p className="text-xs text-brand-purple">9:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Read a physical book or practice relaxation techniques.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-purple-900/60 flex items-center justify-center mr-3">
                <Moon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">Lights Out</h3>
                <p className="text-xs text-brand-purple">10:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Go to bed at your optimal melatonin window.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">Evening Routine Benefits</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Signals to your body that it's time to prepare for sleep</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Consistency reinforces your circadian rhythm</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Reduces time to fall asleep and improves sleep quality</span>
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

export default Evening;

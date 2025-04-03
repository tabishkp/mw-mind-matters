
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Glasses, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const BlueLight: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Reminder set",
      description: "We'll remind you to wear blue light glasses in the evening.",
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
        <h1 className="text-xl font-bold">Blue Light Glasses</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-amber-700 flex items-center justify-center mb-4">
          <Glasses className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Blue Light Protection</h2>
        <p className="text-gray-300">
          Shield your eyes from screens to protect your melatonin production
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recommended Time</h3>
          <div className="text-xl font-bold text-brand-purple">8:30 PM - Bedtime</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          Wear blue light blocking glasses in the evening to minimize exposure to blue light from screens and artificial lighting, which can suppress melatonin production.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            <span>Daily reminder</span>
          </div>
          <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-700/90 to-orange-900 rounded-xl p-5 mb-6">
        <h3 className="text-lg font-medium mb-2">Sleep+ Blue Light Glasses</h3>
        <p className="text-sm opacity-90 mb-4">
          Our premium blue light blocking glasses are specially designed to filter the most harmful wavelengths while remaining stylish for everyday use.
        </p>
        <Button 
          variant="secondary" 
          className="bg-white/20 hover:bg-white/30"
          onClick={() => navigate('/tools/blue-light-detail')}
        >
          Learn More
        </Button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Blue Light Facts</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Blue light from screens signals your brain to stay awake by suppressing melatonin</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Wearing blue light glasses 1-2 hours before bed can improve sleep quality</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Look for glasses that block 90%+ of blue light in the 450-495nm spectrum</span>
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

export default BlueLight;

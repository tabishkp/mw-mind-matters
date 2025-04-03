
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, BedDouble, Thermometer, Moon, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Bedroom: React.FC = () => {
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
        <h1 className="text-xl font-bold">Bedroom Environment</h1>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h2 className="text-lg font-medium mb-3">Optimize your sleep environment</h2>
        <p className="text-gray-300 mb-4">
          Creating the ideal bedroom environment can significantly improve your sleep quality.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-purple-900/60 flex items-center justify-center mr-3">
                <BedDouble className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium">Comfortable Bedding</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Use a supportive mattress and pillows that suit your sleep position.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-900/60 flex items-center justify-center mr-3">
                <Thermometer className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium">Temperature Control</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Keep your bedroom cool (65-68°F/18-20°C) for optimal sleep.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-indigo-900/60 flex items-center justify-center mr-3">
                <Moon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium">Darkness</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Use blackout curtains or a sleep mask to block out all light.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-teal-900/60 flex items-center justify-center mr-3">
                <Volume2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-medium">Quiet Environment</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Use earplugs or a white noise machine to block disruptive sounds.
            </p>
            <Button className="text-sm bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple w-full">
              <Check size={16} className="mr-2" /> Mark as Complete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;

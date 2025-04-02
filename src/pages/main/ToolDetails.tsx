
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Moon, Pill, Clock, Check, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';

const ToolDetails = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [reminderEnabled, setReminderEnabled] = useState(false);
  
  const handleClose = () => {
    navigate(-1);
  };
  
  const handleAddReminder = () => {
    toast({
      title: "Reminder set",
      description: "We'll remind you at the optimal time",
    });
  };

  // Content data based on tool ID
  const toolsContent: Record<string, {
    title: string;
    icon: React.ReactNode;
    description: string;
    tips: string[];
    callToAction: string;
    productRecommendation?: {
      title: string;
      description: string;
      buttonText: string;
      productName: string;
      productLink: string;
    }
  }> = {
    "melatonin-supplements": {
      title: "Melatonin supplements",
      icon: <Pill className="h-8 w-8 text-white" />,
      description: "Temporarily strengthen your natural melatonin window.",
      tips: [
        "Melatonin supplements trick your body into thinking it's sunset, which prepares your energy schedule for sleep",
        "Timing is critical—4 to 8hrs before your melatonin window",
        "Smaller doses (0.5-1mg) are equally effective as higher doses",
        "The supplement industry isn't regulated, so supplement quality varies drastically"
      ],
      callToAction: "Customize & Add",
      productRecommendation: {
        title: "Man Matters Sleep+",
        description: "Our specially formulated sleep supplement combines melatonin with magnesium for optimal sleep quality.",
        buttonText: "Shop Now",
        productName: "Sleep+ with Melatonin & Magnesium",
        productLink: "https://manmatters.com/products/sleep"
      }
    },
    "smart-alarm": {
      title: "Smart Alarm",
      icon: <Clock className="h-8 w-8 text-white" />,
      description: "Wake up refreshed with the only alarm that manages sleep debt.",
      tips: [
        "Know if your alarm is contributing sleep debt as you set it",
        "See opportunities to chip away debt and start waking easier and earlier",
        "Minimize morning grogginess by waking gradually and gently",
        "Customize melodic sounds, volume, phone, & watch vibration settings",
        "After your alarm jump to your favorite app to warm up your brain for 15 minutes"
      ],
      callToAction: "Set Smart Alarm"
    }
  };
  
  // Default content if tool not found
  const defaultContent = {
    title: toolId || "Tool Details",
    icon: <Moon className="h-8 w-8 text-white" />,
    description: "Tool details will appear here.",
    tips: ["This tool information is not available."],
    callToAction: "Go Back"
  };
  
  // Get content for current tool or use default
  const content = toolsContent[toolId || ""] || defaultContent;
  
  return (
    <div className="min-h-screen bg-[#121520] text-white">
      {/* Header Bar */}
      <div className="py-4 px-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-lg font-bold">{content.title}</h1>
        <button onClick={handleClose} className="p-2 rounded-full bg-gray-800">
          <X size={20} className="text-gray-400" />
        </button>
      </div>
      
      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Tool Icon & Description */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-16 w-16 rounded-full bg-brand-purple flex items-center justify-center mb-4">
            {content.icon}
          </div>
          <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
          <p className="text-gray-300">{content.description}</p>
        </div>
        
        {/* Tips Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">How it works & tips</h3>
          <ul className="space-y-4">
            {content.tips.map((tip, index) => (
              <li key={index} className="flex">
                <div className="mt-1 mr-3">
                  <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-gray-200">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Product Recommendation */}
        {content.productRecommendation && (
          <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5 mb-8">
            <h3 className="text-lg font-medium mb-2">{content.productRecommendation.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.productRecommendation.description}</p>
            <Button 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30"
              onClick={() => window.open(content.productRecommendation!.productLink, "_blank")}
            >
              {content.productRecommendation.buttonText}
            </Button>
          </div>
        )}
        
        {/* Settings Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4">Settings</h3>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white mb-1">Remind me</p>
                <p className="text-sm text-gray-400">to take melatonin supplements 4hrs before my melatonin window</p>
              </div>
              <Switch 
                checked={reminderEnabled} 
                onCheckedChange={setReminderEnabled}
                className="bg-gray-700 data-[state=checked]:bg-teal-600"
              />
            </div>
            
            {reminderEnabled && (
              <div className="mt-6 border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-white">Reminder Time</span>
                  </div>
                  <div className="text-white">4h</div>
                </div>
                <p className="text-sm text-gray-400 mb-4">Before melatonin window</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleAddReminder} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
          >
            Remind Me
          </Button>
          
          <Button 
            onClick={handleClose} 
            variant="outline" 
            className="w-full border-gray-700 bg-transparent text-white hover:bg-gray-800 py-5"
          >
            Not Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;

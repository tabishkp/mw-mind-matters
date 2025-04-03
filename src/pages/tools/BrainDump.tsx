
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const BrainDump: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [text, setText] = useState('');

  const handleSave = () => {
    toast({
      title: "Brain dump saved",
      description: "Your thoughts have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121520] text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="mr-2 text-gray-400"
          >
            <ArrowLeft size={24} />
          </Button>
          <h1 className="text-xl font-bold">Brain Dump</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleSave}
          className="text-brand-purple"
          disabled={!text}
        >
          <Save size={24} />
        </Button>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h2 className="text-lg font-medium mb-3">Clear your mind before sleep</h2>
        <p className="text-gray-300 mb-6">
          Write down your thoughts, concerns, and to-dos to help your mind relax and prepare for sleep.
        </p>
        
        <Textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind tonight?" 
          className="min-h-[200px] bg-gray-700/50 border-gray-600 focus-visible:ring-brand-purple text-white"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">Why Brain Dumping Works</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Reduces cognitive load by externalizing thoughts</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Prevents racing thoughts that can delay sleep</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Creates a sense of control over worries and concerns</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrainDump;

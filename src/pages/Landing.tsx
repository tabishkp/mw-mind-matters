
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#121520] text-white p-6">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-6">Sleep Whisper</h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Your personal sleep coach for better rest and recovery
        </p>
        
        <div className="w-full max-w-xs space-y-4">
          <Button 
            onClick={() => navigate('/signup')}
            className="w-full bg-brand-purple hover:bg-purple-600"
          >
            Get Started
          </Button>
          
          <Button 
            onClick={() => navigate('/login')}
            className="w-full bg-transparent border border-gray-600 hover:bg-gray-800"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

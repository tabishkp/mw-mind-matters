
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, CloudMoon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen dark-gradient flex flex-col">
      {/* Brand Header */}
      <div className="w-full flex justify-center pt-12 pb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white flex items-center justify-center">
            <Moon className="mr-2 text-brand-purple" size={32} /> 
            Mind Matters
          </h1>
          <p className="text-gray-400 mt-2">by Brand Man Matters</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8 flex justify-center">
            <CloudMoon size={80} className="text-brand-purple" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Your Personal Sleep Companion
          </h2>
          
          <p className="text-gray-300 mb-8">
            Discover your ideal sleep patterns and transform your rest with science-backed tools 
            and personalized recommendations.
          </p>
          
          <Button 
            onClick={() => navigate('/onboarding')} 
            className="w-full bg-brand-purple hover:bg-purple-600 text-white font-medium py-5"
          >
            Get Started
            <ArrowRight className="ml-2" size={16} />
          </Button>
          
          <p className="text-gray-400 mt-4 text-sm">
            Join thousands who've improved their sleep quality
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-6 px-6">
        <p className="text-center text-gray-500 text-xs">
          © 2023 Brand Man Matters. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;

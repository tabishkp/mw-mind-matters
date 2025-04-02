
import React, { useState } from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SleepTimeChart from '@/components/sleep/SleepTimeChart';
import SleepDebtChart from '@/components/sleep/SleepDebtChart';

const Progress = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'times' | 'debt' | 'quality'>('times');
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">My Progress</h1>
          <p className="text-gray-400">March 20 - April 2</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Gift className="text-brand-purple" size={24} />
            <span className="absolute -top-1 -right-1 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>
          <button>
            <User className="text-gray-400" size={24} />
          </button>
        </div>
      </div>
      
      <div className="px-6">
        {/* Alert Banner */}
        <div className="bg-red-900/40 border border-red-800 rounded-lg py-2 px-4 mb-6 flex items-center">
          <div className="bg-red-700 rounded-full p-1 mr-2">
            <AlertTriangle size={16} className="text-white" />
          </div>
          <div className="text-white">Missing data. <span className="text-brand-purple">Add missing sleep times</span></div>
        </div>
        
        {/* Tabs */}
        <div className="flex rounded-lg bg-gray-800 mb-6">
          <button 
            className={`flex-1 py-3 rounded-lg ${activeTab === 'times' ? 'bg-brand-purple text-white' : 'text-gray-400'} font-medium`}
            onClick={() => setActiveTab('times')}
          >
            Sleep Times
          </button>
          <button 
            className={`flex-1 py-3 rounded-lg ${activeTab === 'debt' ? 'bg-brand-purple text-white' : 'text-gray-400'} font-medium`}
            onClick={() => setActiveTab('debt')}
          >
            Sleep Debt
          </button>
          <button 
            className={`flex-1 py-3 rounded-lg ${activeTab === 'quality' ? 'bg-brand-purple text-white' : 'text-gray-400'} font-medium`}
            onClick={() => setActiveTab('quality')}
          >
            Sleep Quality
          </button>
        </div>
        
        {/* Chart based on active tab */}
        {activeTab === 'times' && <SleepTimeChart />}
        {activeTab === 'debt' && <SleepDebtChart />}
        {activeTab === 'quality' && (
          <div className="flex flex-col items-center justify-center h-60">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Track Sleep Quality</h3>
              <p className="text-gray-400 mb-4">Rate how you feel each morning to analyze what affects your sleep.</p>
              <Button onClick={() => navigate('/tools/sleep-quality')} className="bg-brand-purple">
                Rate Today's Sleep
              </Button>
            </div>
          </div>
        )}
        
        {/* Smart Schedule */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mt-8 flex justify-between items-center">
          <div>
            <h3 className="font-medium">Smart Schedule</h3>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <div className="h-5 w-5 rounded-full border-2 border-brand-purple flex items-center justify-center bg-transparent mr-1">
                <Clock className="text-brand-purple" size={12} />
              </div>
              <span className="text-brand-purple text-sm">GREAT IN <span className="font-bold">7</span> days</span>
            </div>
            <ArrowRight size={18} className="text-gray-500" />
          </div>
        </div>
        
        {/* All sleep debt or times based on active tab */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">
            {activeTab === 'times' ? 'All sleep times' : activeTab === 'debt' ? 'All sleep debt' : 'Sleep quality records'}
          </h3>
          
          {activeTab === 'times' && (
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-400">Last night (Tuesday)</div>
                <div className="text-white">9:45p - 10:15a</div>
              </div>
              <div className="text-white text-lg font-medium">3h 30m</div>
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          )}
          
          {activeTab === 'debt' && (
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-400">Today</div>
                <div className="text-white">April 2</div>
              </div>
              <div className="text-white text-lg font-medium">12.8hrs debt</div>
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          )}
          
          {activeTab === 'quality' && (
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-400">No quality ratings yet</div>
                <div className="text-white">Start tracking today</div>
              </div>
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          )}
        </div>
        
        {/* Sleep Science Tip */}
        <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5 mt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-lg mb-1">Did you know?</h3>
              <p className="text-sm opacity-90 mb-4">
                Consistent sleep and wake times are more important than total sleep duration for feeling energized.
              </p>
              <Button 
                onClick={() => navigate('/learn/sleep-consistency')} 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30"
              >
                Learn More
              </Button>
            </div>
            <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
              <Moon className="text-white" size={36} />
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Progress;

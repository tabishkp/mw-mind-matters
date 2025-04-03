
import React, { useState } from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User, ArrowRight } from 'lucide-react';
import { AlertTriangle, Moon, Clock } from '@/components/ui/lucide-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SleepTimeChart from '@/components/sleep/SleepTimeChart';
import SleepDebtChart from '@/components/sleep/SleepDebtChart';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useSleepQuality } from '@/contexts/SleepQualityContext';
import SleepQualityHistoryChart from '@/components/sleep/SleepQualityHistoryChart';
import SleepQualityModal from '@/components/sleep/SleepQualityModal';

const Progress = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'times' | 'debt' | 'quality'>('times');
  const [sleepChartMode, setSleepChartMode] = useState<'debt' | 'stages'>('debt');
  const { ratings, addRating, hasRatedToday } = useSleepQuality();
  const [qualityModalOpen, setQualityModalOpen] = useState(false);
  
  // Get the last 7 days of ratings
  const recentRatings = ratings.slice(-7);
  
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
        
        {activeTab === 'debt' && (
          <>
            {/* Sleep Visualization Toggle */}
            <div className="flex justify-center mb-4">
              <ToggleGroup type="single" value={sleepChartMode} onValueChange={(value) => value && setSleepChartMode(value as 'debt' | 'stages')}>
                <ToggleGroupItem value="debt" className="text-sm">
                  Sleep Debt
                </ToggleGroupItem>
                <ToggleGroupItem value="stages" className="text-sm">
                  Sleep Stages
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {sleepChartMode === 'stages' && (
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 mb-4">
                <div className="flex flex-wrap gap-4 justify-around">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                    <span className="text-xs">Deep Sleep</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
                    <span className="text-xs">REM Sleep</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-teal-500 mr-2" />
                    <span className="text-xs">Core Sleep</span>
                  </div>
                </div>
              </div>
            )}
            
            <SleepDebtChart mode={sleepChartMode} />
          </>
        )}
        
        {activeTab === 'quality' && (
          ratings.length > 0 ? (
            <div>
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-medium mb-2">Sleep Quality Rating</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Your sleep quality ratings over the past 7 days
                </p>
                <SleepQualityHistoryChart data={recentRatings} />
                <Button 
                  onClick={() => setQualityModalOpen(true)} 
                  className="w-full mt-6 bg-brand-purple"
                >
                  {hasRatedToday ? "Update Today's Rating" : "Rate Today's Sleep"}
                </Button>
              </div>
              
              <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
                <div className="uppercase text-sm text-gray-400 mb-2">What impacts your sleep quality</div>
                <div className="mb-4">
                  <h4 className="font-medium mb-1">Sleep Consistency</h4>
                  <p className="text-sm text-gray-400">Going to bed and waking up at similar times improves your sleep quality</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Wind-down Time</h4>
                  <p className="text-sm text-gray-400">Allow yourself 30-60 minutes to wind down before sleep</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-60">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Track Sleep Quality</h3>
                <p className="text-gray-400 mb-4">Rate how you feel each morning to analyze what affects your sleep.</p>
                <Button onClick={() => setQualityModalOpen(true)} className="bg-brand-purple">
                  Rate Today's Sleep
                </Button>
              </div>
            </div>
          )
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
                <div className="text-sm text-gray-400">{ratings.length > 0 ? "Last Rating" : "No quality ratings yet"}</div>
                <div className="text-white">{ratings.length > 0 ? "Today, 7:30am" : "Start tracking today"}</div>
              </div>
              {ratings.length > 0 && <div className="text-brand-purple font-medium">View details</div>}
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          )}
        </div>
        
        {/* Sleep Quality Modal */}
        <SleepQualityModal
          open={qualityModalOpen}
          onOpenChange={setQualityModalOpen}
          onRatingSubmit={addRating}
        />
        
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

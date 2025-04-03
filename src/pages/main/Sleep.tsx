
import React, { useState } from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { ArrowRight, Gift, User, Info } from 'lucide-react';
import { Moon, Bell, AlertTriangle, MoonStar, Clock } from '@/components/ui/lucide-icons';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import SleepTimeChart from '@/components/sleep/SleepTimeChart';
import SleepDebtChart from '@/components/sleep/SleepDebtChart';
import SleepDebtDisplay from '@/components/sleep/SleepDebtDisplay';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import SleepStagesLegend from '@/components/progress/SleepStagesLegend';

const Sleep = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('sleep-debt');
  const [sleepChartMode, setSleepChartMode] = useState<'debt' | 'stages'>('debt');
  const [timeChartMode, setTimeChartMode] = useState<'default' | 'stages'>('default');
  
  const showInfoToast = () => {
    toast({
      title: "Sleep Debt Explained",
      description: "Sleep debt is the difference between the amount of sleep you should be getting and the amount you actually get.",
    });
  };
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Moon className="text-brand-purple mr-2" size={24} />
          <h1 className="text-xl font-bold">My Sleep</h1>
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
      
      {/* Sleep Debt Section */}
      <div className="px-6">
        {/* Date Range */}
        <div className="text-gray-400 mb-4">March 20 - April 2</div>
        
        {/* Alert Banner */}
        <div className="bg-red-900/40 border border-red-800 rounded-lg py-2 px-4 mb-6 flex items-center">
          <div className="bg-red-700 rounded-full p-1 mr-2">
            <AlertTriangle size={16} className="text-white" />
          </div>
          <div className="text-white">Missing data. <span className="text-brand-purple">Add missing sleep times</span></div>
        </div>
        
        {/* Tabs */}
        <Tabs 
          defaultValue="sleep-debt" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 rounded-lg bg-gray-800 mb-6 p-0 h-auto">
            <TabsTrigger 
              value="sleep-times" 
              className={`py-3 rounded-lg ${activeTab === 'sleep-times' ? 'bg-brand-purple text-white' : 'text-gray-400'}`}
            >
              Sleep Times
            </TabsTrigger>
            <TabsTrigger 
              value="sleep-debt" 
              className={`py-3 rounded-lg ${activeTab === 'sleep-debt' ? 'bg-brand-purple text-white' : 'text-gray-400'}`}
            >
              Sleep Debt
            </TabsTrigger>
            <TabsTrigger 
              value="sleep-quality" 
              className={`py-3 rounded-lg ${activeTab === 'sleep-quality' ? 'bg-brand-purple text-white' : 'text-gray-400'}`}
            >
              Sleep Quality
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="sleep-times">
            {/* Sleep Times Chart Toggle */}
            <div className="flex justify-center mb-4">
              <ToggleGroup type="single" value={timeChartMode} onValueChange={(value) => value && setTimeChartMode(value as 'default' | 'stages')}>
                <ToggleGroupItem value="default" className="text-sm">
                  Hours
                </ToggleGroupItem>
                <ToggleGroupItem value="stages" className="text-sm">
                  Sleep Stages
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {timeChartMode === 'stages' && <SleepStagesLegend />}
            
            {/* Sleep Times Chart */}
            <SleepTimeChart showStages={timeChartMode === 'stages'} />
            
            {timeChartMode === 'stages' && (
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 mt-6 mb-4">
                <h3 className="text-lg font-medium mb-2">Sleep Stages</h3>
                <div className="mb-4 text-sm text-gray-300">
                  Tracking your sleep stages helps understand sleep quality beyond just total hours.
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-800/60 p-3 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mb-2" />
                    <div className="text-sm font-medium">Deep Sleep</div>
                    <div className="text-xs text-gray-400">Physical restoration</div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mb-2" />
                    <div className="text-sm font-medium">REM Sleep</div>
                    <div className="text-xs text-gray-400">Dream state, memory</div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-teal-500 mb-2" />
                    <div className="text-sm font-medium">Core Sleep</div>
                    <div className="text-xs text-gray-400">Light to medium</div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="sleep-debt">
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
            
            {sleepChartMode === 'debt' ? (
              <SleepDebtDisplay debtHours={12.8} />
            ) : (
              <SleepStagesLegend />
            )}
            
            {/* Sleep Chart based on mode */}
            <SleepDebtChart mode={sleepChartMode} />
            
            {/* Current Energy Zone (only show in debt mode) */}
            {sleepChartMode === 'debt' && (
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 mt-8">
                <div className="uppercase text-sm text-gray-400 mb-2">Current Energy Zone</div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center">
                      <Moon size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="text-purple-400 text-lg">Wind-down</div>
                      <div className="text-gray-300">12:35a - 1:42a</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">No change</span>
                    <ArrowRight size={20} className="text-gray-500" />
                  </div>
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
          </TabsContent>
          
          <TabsContent value="sleep-quality">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-gray-500 mb-4">
                <AlertTriangle size={24} />
              </div>
              <p className="text-center text-gray-400">
                Not enough data to analyze your sleep quality yet.
                <br />Track at least 7 days of sleep to see quality analysis.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Man Matters Product Recommendation */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl mt-8 p-6 mb-6">
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">Struggling with sleep?</h3>
              <p className="text-sm text-gray-200 mb-4">Try Man Matters' Magnesium Gummies to improve sleep quality and reduce restlessness.</p>
              <Button 
                variant="secondary" 
                className="bg-white hover:bg-gray-200 text-purple-900"
                onClick={() => window.open("https://manmatters.com/dp/magnesium-gummies/2024470", "_blank")}
              >
                Shop Now
              </Button>
            </div>
            <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
              <MoonStar size={32} className="text-white" />
            </div>
          </div>
        </div>
        
        {/* Sleep Stats and Info */}
        <div className="flex justify-between mt-8 mb-4">
          <h3 className="text-xl font-medium">Sleep Statistics</h3>
          <button onClick={showInfoToast} className="text-brand-purple">
            <Info size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-400">Average Sleep</div>
            <div className="text-xl font-medium mt-1">6h 12m</div>
            <div className="text-xs text-red-400 mt-1">Below recommended</div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-400">Sleep Consistency</div>
            <div className="text-xl font-medium mt-1">42%</div>
            <div className="text-xs text-brand-purple mt-1">Improving</div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-400">Bedtime</div>
            <div className="text-xl font-medium mt-1">11:42p</div>
            <div className="text-xs text-gray-400 mt-1">Average</div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="text-sm text-gray-400">Wake Time</div>
            <div className="text-xl font-medium mt-1">7:18a</div>
            <div className="text-xs text-gray-400 mt-1">Average</div>
          </div>
        </div>
        
        {/* All Sleep Times */}
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">All sleep times</h3>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-400">Last night (Tuesday)</div>
              <div className="text-white">9:45p - 10:15a</div>
            </div>
            <div className="text-white text-lg font-medium">3h 30m</div>
            <ArrowRight size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Sleep;

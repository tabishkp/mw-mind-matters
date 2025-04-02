
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { ArrowRight, Moon, Bell, Gift, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';

const Home = () => {
  const navigate = useNavigate();
  const { ageRange } = useUser();
  
  // Current sleep data
  const sleepDebt = 12.8;
  const yesterdayDebt = 3.2;
  const energyPotential = 36;
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Moon className="text-brand-purple mr-2" size={24} />
          <h1 className="text-xl font-bold">Mind Matters</h1>
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
      
      {/* Main Content */}
      <div className="px-6 py-2">
        <h2 className="text-xl font-medium mb-4">My Sleep</h2>
        
        {/* Sleep Debt Card */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="h-32 w-32 rounded-full border-[6px] border-gray-700 flex items-center justify-center">
                <div>
                  <div className="text-3xl font-bold">{sleepDebt}</div>
                  <div className="text-sm text-gray-400">hrs</div>
                  <div className="text-sm text-gray-200">Sleep debt</div>
                </div>
              </div>
              <div className="absolute -left-4 top-1/4 bg-pink-600 rounded-lg px-2 py-1 text-xs font-semibold">
                + {yesterdayDebt}hrs debt
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-400">Since yesterday</span>
              <div className="text-white font-medium flex items-center">
                <span className="text-pink-500">↑</span> 3.2hrs
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2">
              <div className="text-xs text-gray-400">Energy Potential</div>
              <div className="text-red-400 font-medium">{energyPotential}%</div>
            </div>
          </div>
        </div>
        
        {/* Current Energy Zone */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
          <h3 className="uppercase text-xs tracking-wider text-gray-400 mb-2">Current Energy Zone</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-indigo-400 font-medium">Wind-down</div>
              <div className="text-sm text-gray-400">12:35a - 1:42a</div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">No change</span>
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Next Up */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
          <h3 className="uppercase text-xs tracking-wider text-gray-400 mb-2">Next Up</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-indigo-400 font-medium">Melatonin Window</div>
              <div className="text-sm text-gray-400">1:43a - 3:18a</div>
            </div>
            <div className="flex items-center">
              <Bell size={18} className="text-brand-purple mr-2" />
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Recommendations */}
        <h2 className="text-xl font-medium mt-8 mb-4">Recommendations for You</h2>
        
        <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5 mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-lg">Magnesium for Better Sleep</h3>
              <p className="text-sm opacity-90 mt-1 mb-4">
                Our science-backed magnesium supplement is designed to improve sleep quality.
              </p>
              <Button 
                onClick={() => navigate('/tools/magnesium')} 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30"
              >
                Learn More
              </Button>
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
              <Pill className="text-white" size={36} />
            </div>
          </div>
        </div>
        
        {/* Tonight's Actions */}
        <h2 className="text-xl font-medium mt-8 mb-4">Tonight's Actions</h2>
        
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <div className="min-w-[150px] max-w-[150px] bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="h-12 w-12 rounded-full bg-indigo-500/30 flex items-center justify-center mb-3">
              <Moon className="text-indigo-300" size={24} />
            </div>
            <h3 className="font-medium">Set a Sleep Schedule</h3>
            <p className="text-xs text-gray-400 mt-1">Consistent times help your body</p>
          </div>
          
          <div className="min-w-[150px] max-w-[150px] bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="h-12 w-12 rounded-full bg-teal-500/30 flex items-center justify-center mb-3">
              <AlarmClock className="text-teal-300" size={24} />
            </div>
            <h3 className="font-medium">Smart Alarm</h3>
            <p className="text-xs text-gray-400 mt-1">Wake when your body is ready</p>
          </div>
          
          <div className="min-w-[150px] max-w-[150px] bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="h-12 w-12 rounded-full bg-orange-500/30 flex items-center justify-center mb-3">
              <Smartphone className="text-orange-300" size={24} />
            </div>
            <h3 className="font-medium">Digital Detox</h3>
            <p className="text-xs text-gray-400 mt-1">Limit screens before bed</p>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Home;

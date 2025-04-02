
import React from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Sunrise, Sun, Coffee, Sunset, Moon, MoonStar, 
  Battery, LineChart 
} from '@/components/ui/lucide-icons';
import EnergyLevelChart from '@/components/energy/EnergyLevelChart';

const Energy = () => {
  const navigate = useNavigate();
  
  // Sample data for energy cycle
  const energyCycle = [
    { time: '6:00 AM', stage: 'Wake Up', icon: 'sunrise', description: 'Sleep inertia (90 mins)' },
    { time: '8:30 AM', stage: 'Morning Peak', icon: 'sun', description: 'High energy & focus' },
    { time: '1:00 PM', stage: 'Afternoon Dip', icon: 'coffee', description: 'Energy decrease' },
    { time: '5:30 PM', stage: 'Evening Peak', icon: 'sunset', description: 'Second wind' },
    { time: '10:00 PM', stage: 'Wind-down', icon: 'moon', description: 'Preparing for sleep' },
    { time: '11:30 PM', stage: 'Melatonin Window', icon: 'stars', description: 'Optimal sleep time' }
  ];
  
  const energyIconMap: Record<string, React.ReactNode> = {
    sunrise: <Sunrise className="h-6 w-6 text-pink-400" />,
    sun: <Sun className="h-6 w-6 text-amber-400" />,
    coffee: <Coffee className="h-6 w-6 text-orange-400" />,
    sunset: <Sunset className="h-6 w-6 text-purple-400" />,
    moon: <Moon className="h-6 w-6 text-indigo-400" />,
    stars: <MoonStar className="h-6 w-6 text-blue-400" />
  };
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">My Energy</h1>
          <p className="text-gray-400">Today, April 2</p>
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
        {/* Current Energy State */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
          <h3 className="uppercase text-xs tracking-wider text-gray-400 mb-2">Current Energy Zone</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-indigo-400 font-medium">Wind-down</div>
              <div className="text-sm text-gray-400">12:35a - 1:42a</div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">23 mins left</span>
              <ArrowRight size={18} className="text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Energy Level Chart */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-4">Today's Energy Forecast</h2>
          <p className="text-sm text-gray-400 mb-4">
            Based on your sleep patterns and chronotype, here's your predicted energy throughout the day:
          </p>
          <EnergyLevelChart />
        </div>
        
        {/* Detailed Energy Explanation Card */}
        <div className="bg-black rounded-xl p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Daily Energy is Predictable</h2>
            <button className="p-1 rounded-full bg-gray-800">
              <X size={20} className="text-gray-400" />
            </button>
          </div>
          
          <p className="text-gray-300 mb-6">
            There's a clock in your head that schedules your energy.
          </p>
          
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <LineChart className="mr-2" size={24} /> Energy Peaks and Dips
          </h3>
          
          <p className="text-gray-300 mb-6">
            Circadian rhythm is the part of your brain that tells your body when to be active and 
            inactive. Mind Matters calls this your energy schedule.
          </p>
          
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <User className="mr-2" size={24} /> Unique to You
          </h3>
          
          <p className="text-gray-300 mb-6">
            It's different for every person—the timing of the energy cycles change daily based on your 
            sleep and relative light exposure.
          </p>
          
          <p className="text-gray-300 mb-2">
            Understanding your energy schedule helps you <span className="font-bold">listen to your body</span> and 
            <span className="font-bold"> predict when to be active, rest, and sleep.</span> The timing of these 
            <span className="font-bold"> peaks and dips is unique to you</span> based on your chronotype, but the 
            sequence is the same for everyone:
          </p>
        </div>
        
        {/* Energy Cycle Timeline */}
        <h2 className="text-xl font-medium mb-4">Your Daily Energy Cycle</h2>
        
        <div className="space-y-6 mb-8">
          {energyCycle.map((item, index) => (
            <div key={index} className="flex">
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                  {energyIconMap[item.icon]}
                </div>
              </div>
              <div className="flex-1 border-b border-gray-800 pb-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.stage}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Recommendations */}
        <h2 className="text-xl font-medium mb-4">Optimize Your Day</h2>
        
        <div className="space-y-4 mb-8">
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-amber-500/30 flex items-center justify-center mr-3">
                <Sun className="h-5 w-5 text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Morning Peak (8:30 AM - 12:00 PM)</h3>
                <p className="text-sm text-gray-400">Best for focused work, important meetings, and learning</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-orange-500/30 flex items-center justify-center mr-3">
                <Coffee className="h-5 w-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Afternoon Dip (1:00 PM - 3:30 PM)</h3>
                <p className="text-sm text-gray-400">Good for breaks, light tasks, or a short nap if possible</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-purple-500/30 flex items-center justify-center mr-3">
                <Sunset className="h-5 w-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Evening Peak (5:30 PM - 9:00 PM)</h3>
                <p className="text-sm text-gray-400">Ideal for creative work, exercise, and social activities</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Recommendation */}
        <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5 mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-lg mb-1">Boost Your Energy Naturally</h3>
              <p className="text-sm opacity-90 mb-4">
                Man Matters Magnesium Gummies help regulate your sleep-wake cycles for better daytime energy.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white/20 hover:bg-white/30"
                onClick={() => window.open("https://manmatters.com/dp/magnesium-gummies/2024470", "_blank")}
              >
                Learn More
              </Button>
            </div>
            <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
              <Battery className="text-white" size={36} />
            </div>
          </div>
        </div>
        
        {/* Track Button */}
        <Button 
          onClick={() => navigate('/tools/energy-tracking')} 
          className="w-full bg-brand-purple hover:bg-purple-600 mb-4"
        >
          Track Today's Energy
        </Button>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Energy;

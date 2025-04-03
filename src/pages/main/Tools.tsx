import React from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User } from 'lucide-react';
import { 
  Music, Play, BedDouble, Glasses, Moon, Pill, Coffee, UtensilsCrossed, 
  Dumbbell, Wine, Sun, Eye, TrendingUp, FileEdit, Waves, Clock, Activity 
} from '@/components/ui/lucide-icons';
import { Link } from 'react-router-dom';
import ToolCard from '@/components/tools/ToolCard';

const Tools = () => {
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Tools</h1>
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
      <div className="px-6">
        {/* Smart Alarm & Sleep Quality */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <ToolCard 
            id="smart-alarm"
            title="Smart Alarm"
            description="10:15a Today S M T W T F S"
            icon={<Clock className="h-6 w-6 text-white" />}
            iconColor="bg-gradient-to-br from-purple-500 to-orange-500"
            link="/tools/smart-alarm"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard 
            id="sleep-quality"
            title="Sleep quality"
            description="Monitor progress by tracking how you feel"
            icon={<Activity className="h-6 w-6 text-white" />}
            iconColor="bg-gradient-to-br from-pink-500 to-red-500"
            link="/tools/sleep-quality"
            className="bg-gray-800/40 border border-gray-700"
          />
        </div>
        
        {/* Sleep Aids Section */}
        <h2 className="text-lg font-medium mb-3">Sleep aids</h2>
        
        <Link to="/tools/sleep-sounds" className="block">
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
              <Play className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Sleep sounds</h3>
              <p className="text-sm text-gray-400">Ambient Music</p>
            </div>
          </div>
        </Link>
        <Link to="/tools/sleep-sounds" className="block">
          <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mr-3">
              <Play className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium">Guided Meditaion</h3>
              <p className="text-sm text-gray-400">Relax and unwind</p>
            </div>
          </div>
        </Link>
        
        {/* Guides Section */}
        <h2 className="text-lg font-medium mb-3">Guides</h2>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          <ToolCard
            id="brain-dump"
            title="Write a brain dump"
            description="Ease your mind before bed"
            icon={<FileEdit className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-blue-500 to-cyan-500"
            link="/tools/brain-dump"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="bedroom"
            title="Prep the bedroom"
            description="Guidance to an environment check"
            icon={<BedDouble className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-purple-500 to-violet-500" 
            link="/tools/bedroom"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="relax"
            title="Relaxation"
            description="Progressive techniques for sleep"
            icon={<Waves className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-purple-500 to-pink-500"
            link="/tools/relaxation"
            className="bg-gray-800/40 border border-gray-700"
          />
        </div>
        
        {/* Habit Reminders Section */}
        <h2 className="text-lg font-medium mb-3">Habit Reminders</h2>
        <p className="text-sm text-gray-400 mb-4">Optimize routines with nudges aligned with your daily energy schedule</p>
        
        {/* Start at the Right Time */}
        <h3 className="uppercase text-xs text-gray-500 mb-2">START AT THE RIGHT TIME</h3>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          <ToolCard
            id="melatonin-window"
            title="Melatonin window"
            icon={<Moon className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-indigo-800 to-purple-900"
            hasReminder={true}
            link="/tools/melatonin-window"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="melatonin-supplements"
            title="Melatonin supplements"
            icon={<Pill className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-purple-800 to-violet-900"
            hasReminder={true}
            link="/tools/melatonin-supplements"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="blue-light"
            title="Blue light glasses"
            icon={<Glasses className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-orange-500 to-amber-700"
            link="/tools/blue-light"
            className="bg-gray-800/40 border border-gray-700"
          />
        </div>
        
        {/* Stop at the Right Time */}
        <h3 className="uppercase text-xs text-gray-500 mb-2">STOP AT THE RIGHT TIME</h3>
        
        <div className="grid grid-cols-4 gap-3 mb-6">
          <ToolCard
            id="caffeine"
            title="Caffeine"
            icon={<Coffee className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-amber-700 to-yellow-900"
            hasReminder={true}
            link="/tools/caffeine"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="meals"
            title="Meals"
            icon={<UtensilsCrossed className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-teal-600 to-cyan-800"
            link="/tools/meals"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="workouts"
            title="Workouts"
            icon={<Dumbbell className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-green-600 to-emerald-800"
            link="/tools/workouts"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="alcohol"
            title="Alcohol"
            icon={<Wine className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-red-700 to-pink-900"
            link="/tools/alcohol"
            className="bg-gray-800/40 border border-gray-700"
          />
        </div>
        
        {/* Optimize Routines */}
        <h3 className="uppercase text-xs text-gray-500 mb-2">OPTIMIZE ROUTINES</h3>
        
        <div className="grid grid-cols-4 gap-3">
          <ToolCard
            id="evening"
            title="Evening"
            icon={<Moon className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-purple-800 to-indigo-900"
            link="/tools/evening"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="morning"
            title="Morning"
            icon={<Sun className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-yellow-500 to-orange-600"
            link="/tools/morning"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="blue-light-detail"
            title="Blue Light"
            icon={<Eye className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-violet-600 to-indigo-800"
            hasReminder={true}
            link="/tools/blue-light-detail"
            className="bg-gray-800/40 border border-gray-700"
          />
          
          <ToolCard
            id="peaks-dips"
            title="Peaks & Dips"
            icon={<TrendingUp className="h-5 w-5 text-white" />}
            iconColor="bg-gradient-to-br from-orange-600 to-red-800"
            hasReminder={true}
            link="/tools/peaks-dips"
            className="bg-gray-800/40 border border-gray-700"
          />
        </div>
        
        {/* Wind-down Tip */}
        <div className="mt-8 bg-gray-800/40 border border-gray-700 rounded-xl p-4 flex items-center">
          <div className="flex-1">
            <h4 className="text-lg">Wind-down tip</h4>
            <p className="text-gray-400 text-sm">Limit blue light 90mins before bed to maximize melatonin.</p>
            <div className="mt-2">
              <button className="text-sm text-brand-purple">Make it a habit</button>
            </div>
          </div>
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 ml-2 flex items-center justify-center">
            <Glasses className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Tools;

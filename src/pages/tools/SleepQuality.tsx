
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SleepQualityRating, { SleepQualityScore } from '@/components/sleep/SleepQualityRating';
import SleepQualityHistoryChart from '@/components/sleep/SleepQualityHistoryChart';
import { useSleepQuality } from '@/contexts/SleepQualityContext';
import { useToast } from '@/hooks/use-toast';
import BottomNavigation from '@/components/layout/BottomNavigation';

const SleepQualityPage = () => {
  const navigate = useNavigate();
  const { ratings, addRating, getAverageRating, hasRatedToday } = useSleepQuality();
  const { toast } = useToast();
  
  const handleRatingSubmit = (rating: SleepQualityScore) => {
    addRating(rating);
    toast({
      title: "Sleep quality recorded",
      description: "Your sleep quality has been saved. Keep tracking for better insights!",
    });
  };
  
  // Get the last 7 days of ratings
  const recentRatings = ratings.slice(-7);
  const averageRating = getAverageRating();
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="text-gray-400" size={24} />
          </button>
          <h1 className="text-xl font-bold">Sleep Quality</h1>
        </div>
        <button onClick={() => toast({
          title: "Sleep Quality Info",
          description: "Rating your sleep 90 minutes after waking provides the most accurate measure of sleep quality."
        })}>
          <Info className="text-gray-400" size={20} />
        </button>
      </div>
      
      {/* Main Content */}
      <div className="px-6">
        {/* Status Overview */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Your Sleep Quality</h2>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">7-day average</div>
              <div className="text-2xl font-semibold mt-1">
                {averageRating ? `${averageRating}/5` : "No data yet"}
              </div>
              {averageRating && (
                <div className={`text-xs mt-1 ${
                  averageRating < 3 ? "text-red-400" : 
                  averageRating < 4 ? "text-yellow-400" : 
                  "text-green-400"
                }`}>
                  {averageRating < 3 ? "Needs improvement" : 
                   averageRating < 4 ? "Average" : 
                   "Good quality"}
                </div>
              )}
            </div>
            
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 flex items-center justify-center">
                {averageRating ? (
                  <span className="text-lg font-semibold">{averageRating}</span>
                ) : (
                  <span className="text-lg font-semibold">-</span>
                )}
              </div>
              
              {/* Circular progress with color based on average */}
              {averageRating && (
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#444"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={averageRating < 3 ? "#f87171" : averageRating < 4 ? "#fbbf24" : "#9b87f5"}
                    strokeWidth="2"
                    strokeDasharray={`${(averageRating / 5) * 100}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
          </div>
          
          {ratings.length > 0 ? (
            <SleepQualityHistoryChart data={recentRatings} />
          ) : (
            <div className="text-center text-gray-400 py-8">
              No sleep quality data yet. Start rating your sleep!
            </div>
          )}
        </div>
        
        {/* Today's Rating */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Today's Sleep Quality</h2>
          
          {hasRatedToday ? (
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-green-400 mb-2">✓ Completed</div>
              <p className="text-gray-400">You've already rated your sleep quality today.</p>
              <p className="text-sm mt-4">Come back tomorrow for your next rating!</p>
            </div>
          ) : (
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 mb-4">Rate how rested you feel 90 minutes after waking up:</p>
              <SleepQualityRating onRatingSubmit={handleRatingSubmit} />
            </div>
          )}
        </div>
        
        {/* Science Behind */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium mb-2">The science behind why it works</h2>
          <p className="text-sm text-gray-400 mb-4">
            To date, there is no objective measurement of sleep quality widely agreed upon by sleep scientists.
            The gold standard questionnaire for sleep quality, called the Pittsburgh Sleep Quality Index, has 7 
            different types of self-rated questions.
          </p>
          <p className="text-sm text-gray-400">
            Waking up from sleep takes ninety minutes for you to become fully alert. This is known scientifically as
            Sleep Inertia. By rating how you feel 90 minutes after wake up you'll have an accurate measure of your sleep quality.
          </p>
        </div>
        
        {/* Morning Reminder Setting */}
        <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-4">
          <h2 className="text-lg font-medium mb-2">Settings</h2>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-medium">Morning reminder</div>
              <div className="text-sm text-gray-400">after sleep inertia</div>
            </div>
            <div className="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer relative">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Reminder Time</div>
              <div className="text-sm text-gray-400">After waketime</div>
            </div>
            <div className="text-brand-purple">1h 30m</div>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default SleepQualityPage;

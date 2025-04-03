
import React, { useState } from 'react';
import { Frown, Smile, SmilePlus, Meh } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export type SleepQualityScore = 1 | 2 | 3 | 4 | 5;

export interface SleepQualityRatingProps {
  onRatingSubmit?: (rating: SleepQualityScore) => void;
  onClose?: () => void;
}

const SleepQualityRating: React.FC<SleepQualityRatingProps> = ({ 
  onRatingSubmit,
  onClose
}) => {
  const [selectedRating, setSelectedRating] = useState<SleepQualityScore | null>(null);
  const { toast } = useToast();
  const { name } = useUser();

  const handleRatingSelect = (rating: SleepQualityScore) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      onRatingSubmit?.(selectedRating);
      toast({
        title: "Sleep quality recorded",
        description: "Your sleep quality has been saved. Check back for insights.",
      });
      onClose?.();
    } else {
      toast({
        title: "Please select a rating",
        description: "Choose how you feel before submitting",
        variant: "destructive"
      });
    }
  };

  const ratingLabels = {
    1: "Terrible",
    2: "Poor",
    3: "Okay",
    4: "Good",
    5: "Awesome"
  };

  const ratingIcons = [
    { score: 1, icon: <Frown className="w-6 h-6" />, label: "Terrible" },
    { score: 2, icon: <Frown className="w-6 h-6" />, label: "Poor" },
    { score: 3, icon: <Meh className="w-6 h-6" />, label: "Okay" },
    { score: 4, icon: <Smile className="w-6 h-6" />, label: "Good" },
    { score: 5, icon: <SmilePlus className="w-6 h-6" />, label: "Awesome" }
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Sleep Quality</h2>
        <p className="text-gray-400">
          Gauge your sleep quality by tracking how you're feeling 90 mins after wake up.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 p-6 rounded-xl mb-6">
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-lg font-semibold text-white">How are you feeling this morning?</p>
            <p className="text-sm text-purple-200">It's the perfect time to gauge your sleep quality by rating how you feel now.</p>
          </div>
          
          <div className="flex justify-between items-center py-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button 
                key={rating}
                onClick={() => handleRatingSelect(rating as SleepQualityScore)}
                className={`rounded-full w-12 h-12 flex items-center justify-center transition-all ${
                  selectedRating === rating 
                    ? 'bg-brand-purple scale-110 shadow-lg' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {ratingIcons[rating-1].icon}
              </button>
            ))}
          </div>
          
          <div className="flex justify-between text-xs text-gray-400">
            <span>Poor</span>
            <span className="flex-1"></span>
            <span>Awesome</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Learn the impact of your sleep habits</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 mr-2"></div>
            <span>Learn the impact of your sleep habits</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 mr-2"></div>
            <span>Feel better about waking up</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 mr-2"></div>
            <span>Truly assess how you feel after sleep</span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">How it works</h3>
        <p className="text-gray-400">
          We'll have you rate how rested you feel 90 minutes after waking up. It takes ninety minutes for you to 
          become alert after a night of sleep. That's the best time to record how you feel, which is one of the 
          most important measures of sleep quality.
        </p>
      </div>

      <div className="mt-6">
        <Button 
          onClick={handleSubmit} 
          className="w-full bg-brand-purple hover:bg-brand-purple/90"
        >
          Submit Rating
        </Button>
      </div>
    </div>
  );
};

export default SleepQualityRating;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

const MeditationPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(600); // Default 10 minutes in seconds
  
  // Sample meditation data
  const meditations = {
    'sleep-deeply': {
      title: 'Sleep Deeply',
      author: 'Dr. James Miller',
      duration: 600, // 10 minutes
      backgroundImage: 'public/lovable-uploads/c7e2e2bd-791b-4c31-949a-3b3db37512cf.png'
    },
    'calm': {
      title: 'Calm',
      author: 'Sarah Johnson',
      duration: 900, // 15 minutes
      backgroundImage: 'public/lovable-uploads/687497cf-fd0f-4ff7-ab7f-85da6c6322d4.png'
    },
    'optimal-brain': {
      title: 'Optimal Brain States',
      author: 'Dr. Michael Lee',
      duration: 1200, // 20 minutes
      backgroundImage: 'public/lovable-uploads/99df427d-9d50-45ff-a5a8-b9cf654902e4.png'
    }
  };
  
  // Get meditation data or use default
  const meditation = (id && meditations[id as keyof typeof meditations]) || {
    title: 'Meditation',
    author: 'Mind Matters',
    duration: 600,
    backgroundImage: 'public/lovable-uploads/c7e2e2bd-791b-4c31-949a-3b3db37512cf.png'
  };
  
  useEffect(() => {
    setDuration(meditation.duration);
    
    // Play after a short delay for better user experience
    const timer = setTimeout(() => {
      setIsPlaying(true);
      toast({
        title: "Meditation started",
        description: "Find a comfortable position and close your eyes.",
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [meditation]);
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(interval!);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleSliderChange = (value: number[]) => {
    setCurrentTime(value[0]);
  };
  
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${meditation.backgroundImage})` }}
    >
      {/* Header */}
      <div className="py-4 px-4 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-black/30">
          <ArrowLeft size={20} className="text-white" />
        </button>
      </div>
      
      {/* Main Content - Centered */}
      <div className="flex-grow flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Meditation Info */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-white mb-2">{meditation.title}</h1>
            <p className="text-gray-300">by {meditation.author}</p>
          </div>
          
          {/* Progress */}
          <div className="mb-12">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSliderChange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-300">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center space-x-8">
            <button className="text-white/70 hover:text-white">
              <SkipBack size={32} />
            </button>
            
            <button 
              onClick={togglePlayPause}
              className="h-16 w-16 rounded-full bg-brand-purple hover:bg-purple-600 flex items-center justify-center"
            >
              {isPlaying ? <Pause size={32} className="text-white" /> : <Play size={32} className="text-white ml-1" />}
            </button>
            
            <button className="text-white/70 hover:text-white">
              <SkipForward size={32} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-8 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Volume2 size={20} className="text-white mr-2" />
            <Slider 
              defaultValue={[70]} 
              max={100} 
              step={1} 
              className="w-28" 
            />
          </div>
          
          <div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10"
              onClick={() => window.open("https://manmatters.com/products/sleep", "_blank")}
            >
              Try Sleep+ Supplement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationPlayer;

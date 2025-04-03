
import React from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User, ArrowRight, Atom, Scale, Brain, Ear, Battery, Medal, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();

  const leaderboard = [
    {
      id: "sleep-foundation",
      title: "Abhinav",
      description: "200 Hours",
      icon: <Trophy className="h-6 w-6 text-white" />,
      iconBg: "gold"
    },
    {
      id: "sleep-debt",
      title: "Tabish",
      description: "198 Hours",
      icon: <Trophy className="h-6 w-6 text-white" />,
      iconBg: "silver"
    },
    {
      id: "energy-schedule",
      title: "Mayur",
      description: "197 Hours",
      icon: <Trophy className="h-6 w-6 text-white" />,
      iconBg: "#CD7F32"
    },
    {
      id: "energy-alignment",
      title: "Himanshu",
      description: "196 Hours",
      icon: <Medal className="h-6 w-6 text-white" />,
      iconBg: "red"
    },
    {
      id: "sleep-debt-good-bad",
      title: "Sayalie",
      description: "150 Hours",
      icon: <Medal className="h-6 w-6 text-white" />,
      iconBg: "red"
    }
  ];

  // Featured articles for the homepage promotion
  const featuredArticles = [
    {
      id: "magnesium-sleep",
      title: "The Science of Magnesium for Sleep",
      description: "Learn how Man Matters' Magnesium supplement can transform your sleep quality.",
      image: "public/lovable-uploads/99df427d-9d50-45ff-a5a8-b9cf654902e4.png"
    },
    {
      id: "circadian-rhythm",
      title: "Understanding Your Circadian Rhythm",
      description: "The key to better energy, focus and sleep lies in your internal clock.",
      image: "public/lovable-uploads/687497cf-fd0f-4ff7-ab7f-85da6c6322d4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      {/* Header */}
      <div className="py-6 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Community</h1>
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
      
      {/* Science Articles */}
      <div className="px-6">
        <h2 className="text-lg font-medium mb-4">Sleep Contest Leaderboard</h2>
        {leaderboard.map((user, index) => (
            <div className="flex items-start py-4 border-b border-gray-800">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-4 mt-1`} style={{backgroundColor: user?.iconBg}} >
                {user.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{user.title}</h3>
                    <p className="text-gray-400">{user.description}</p>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
      
      {/* Brand Man Matters Product Recommendation */}
      <div className="px-6 mt-8">
        <div className="bg-gradient-to-br from-brand-purple/90 to-purple-900 rounded-xl p-5">
          <div className="flex justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-1">Man Matters Sleep+ Supplements</h3>
              <p className="text-sm opacity-90 mb-3">
                Scientifically formulated with Magnesium & Melatonin for better sleep quality.
              </p>
              <button 
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-white text-sm font-medium"
                onClick={() => window.open("https://manmatters.com/products/sleep", "_blank")}
              >
                Learn More
              </button>
            </div>
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img 
                src="public/lovable-uploads/93f03b15-3c54-4edb-a56e-e3243c390409.png" 
                alt="Sleep+ Supplement" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Community;


import React from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Gift, User, ArrowRight, Atom, Scale, Brain, Ear, Battery } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: "sleep-foundation",
      title: "Sleep is the Foundation of Your Wellbeing",
      description: "Apply 100 years of science to own your sleep need.",
      icon: <Atom className="h-6 w-6 text-white" />,
      iconBg: "bg-brand-purple"
    },
    {
      id: "sleep-debt",
      title: "Lower Your Sleep Debt, Increase Overall Energy",
      description: "You can't do more by sleeping less.",
      icon: <Scale className="h-6 w-6 text-white" />,
      iconBg: "bg-pink-600"
    },
    {
      id: "energy-schedule",
      title: "Your Daily Energy Schedule is Predictable",
      description: "There's a clock in your head that schedules daily energy.",
      icon: <Brain className="h-6 w-6 text-white" />,
      iconBg: "bg-red-600"
    },
    {
      id: "energy-alignment",
      title: "Aligning Activities to Energy",
      description: "Take advantage of your energy.",
      icon: <Ear className="h-6 w-6 text-white" />,
      iconBg: "bg-orange-600"
    },
    {
      id: "sleep-debt-good-bad",
      title: "How Much Sleep Debt is Good vs Bad?",
      description: "0hrs may not be realistic, but what's optimal?",
      icon: <Battery className="h-6 w-6 text-white" />,
      iconBg: "bg-amber-600"
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
          <h1 className="text-xl font-bold">Learn</h1>
          <p className="text-gray-400">Practical Science</p>
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
      
      {/* Featured Articles */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-medium mb-4">Featured Articles</h2>
        
        {featuredArticles.map((article) => (
          <Link to={`/learn/${article.id}`} key={article.id} className="block mb-4">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                <h3 className="font-bold text-lg">{article.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{article.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Science Articles */}
      <div className="px-6">
        {articles.map((article, index) => (
          <Link to={`/learn/${article.id}`} key={article.id}>
            <div className="flex items-start py-4 border-b border-gray-800">
              <div className={`${article.iconBg} h-10 w-10 rounded-lg flex items-center justify-center mr-4 mt-1`}>
                {article.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{article.title}</h3>
                    <p className="text-gray-400">{article.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-500" />
                </div>
              </div>
            </div>
          </Link>
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

export default Learn;

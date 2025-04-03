
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, BarChart2, Briefcase, LineChart, BookOpen, Home } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Moon size={24} />, label: 'Sleep', path: '/sleep' },
    { icon: <BarChart2 size={24} />, label: 'Energy', path: '/energy' },
    { icon: <Briefcase size={24} />, label: 'Tools', path: '/tools' },
    // { icon: <LineChart size={24} />, label: 'Progress', path: '/progress' },
    { icon: <BookOpen size={24} />, label: 'Learn', path: '/learn' },
    { icon: <BookOpen size={24} />, label: 'Community', path: '/community' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-gray-800 z-40">
      <div className="flex justify-between px-2 py-1 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`nav-item py-2 px-3 rounded-lg transition-colors ${
              isActive(item.path) ? 'nav-item-active' : 'text-gray-400'
            }`}
          >
            {React.cloneElement(item.icon, { 
              className: isActive(item.path) ? 'text-brand-purple mb-1' : 'mb-1 text-gray-400',
            })}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;

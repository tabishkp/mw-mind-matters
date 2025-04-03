
import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121520] text-white">
      <main className="flex-grow pb-16">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Landing from '@/pages/Landing';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import Home from '@/pages/main/Home';
import Sleep from '@/pages/main/Sleep';
import Learn from '@/pages/main/Learn';
import Tools from '@/pages/main/Tools';
import Progress from '@/pages/main/Progress';
import SmartAlarm from '@/pages/tools/SmartAlarm';
import BrainDump from '@/pages/tools/BrainDump';
import Bedroom from '@/pages/tools/Bedroom';
import Relaxation from '@/pages/tools/Relaxation';
import MelatoninWindow from '@/pages/tools/MelatoninWindow';
import MelatoninSupplements from '@/pages/tools/MelatoninSupplements';
import BlueLight from '@/pages/tools/BlueLight';
import Caffeine from '@/pages/tools/Caffeine';
import Meals from '@/pages/tools/Meals';
import Workouts from '@/pages/tools/Workouts';
import Alcohol from '@/pages/tools/Alcohol';
import Evening from '@/pages/tools/Evening';
import Morning from '@/pages/tools/Morning';
import BlueLightDetail from '@/pages/tools/BlueLightDetail';
import PeaksDips from '@/pages/tools/PeaksDips';
import { Toaster } from '@/components/ui/toaster';
import { UserProvider } from './contexts/UserContext';
import { SleepQualityProvider } from './contexts/SleepQualityContext';
import SleepQualityPage from './pages/tools/SleepQuality';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <SleepQualityProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/sleep" element={<Sleep />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/progress" element={<Progress />} />
            </Route>
            <Route path="/tools/smart-alarm" element={<SmartAlarm />} />
            <Route path="/tools/brain-dump" element={<BrainDump />} />
            <Route path="/tools/bedroom" element={<Bedroom />} />
            <Route path="/tools/relaxation" element={<Relaxation />} />
            <Route path="/tools/melatonin-window" element={<MelatoninWindow />} />
            <Route path="/tools/melatonin-supplements" element={<MelatoninSupplements />} />
            <Route path="/tools/blue-light" element={<BlueLight />} />
            <Route path="/tools/caffeine" element={<Caffeine />} />
            <Route path="/tools/meals" element={<Meals />} />
            <Route path="/tools/workouts" element={<Workouts />} />
            <Route path="/tools/alcohol" element={<Alcohol />} />
            <Route path="/tools/evening" element={<Evening />} />
            <Route path="/tools/morning" element={<Morning />} />
            <Route path="/tools/blue-light-detail" element={<BlueLightDetail />} />
            <Route path="/tools/peaks-dips" element={<PeaksDips />} />
            <Route path="/tools/sleep-quality" element={<SleepQualityPage />} />
          </Routes>
          <Toaster />
        </SleepQualityProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;


import React, { useState } from 'react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Moon } from '@/components/ui/lucide-icons';
import { useNavigate } from 'react-router-dom';
import SleepTimeChart from '@/components/sleep/SleepTimeChart';
import SleepDebtChart from '@/components/sleep/SleepDebtChart';

// Imported components
import ProgressHeader from '@/components/progress/ProgressHeader';
import AlertBanner from '@/components/progress/AlertBanner';
import TabSelector, { ProgressTab } from '@/components/progress/TabSelector';
import SleepQualityEmptyState from '@/components/progress/SleepQualityEmptyState';
import SleepScienceTip from '@/components/progress/SleepScienceTip';
import SmartScheduleCard from '@/components/progress/SmartScheduleCard';
import RecordListItem from '@/components/progress/RecordListItem';
import ToggleSelector from '@/components/progress/ToggleSelector';
import SleepStagesLegend from '@/components/progress/SleepStagesLegend';

const Progress = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ProgressTab>('times');
  const [sleepChartMode, setSleepChartMode] = useState<'debt' | 'stages'>('debt');
  
  const tabs = [
    { id: 'times' as const, label: 'Sleep Times' },
    { id: 'debt' as const, label: 'Sleep Debt' },
    { id: 'quality' as const, label: 'Sleep Quality' },
  ];
  
  const toggleOptions = [
    { value: 'debt', label: 'Sleep Debt' },
    { value: 'stages', label: 'Sleep Stages' },
  ];
  
  return (
    <div className="min-h-screen bg-[#121520] text-white pb-20">
      <ProgressHeader 
        title="My Progress" 
        subtitle="March 20 - April 2"
      />
      
      <div className="px-6">
        <AlertBanner 
          message="Missing data."
          actionText="Add missing sleep times"
        />
        
        <TabSelector 
          activeTab={activeTab} 
          onChange={setActiveTab} 
          tabs={tabs}
        />
        
        {activeTab === 'times' && <SleepTimeChart />}
        
        {activeTab === 'debt' && (
          <>
            <ToggleSelector
              value={sleepChartMode}
              onValueChange={(value) => setSleepChartMode(value as 'debt' | 'stages')}
              options={toggleOptions}
            />
            
            {sleepChartMode === 'stages' && <SleepStagesLegend />}
            
            <SleepDebtChart mode={sleepChartMode} />
          </>
        )}
        
        {activeTab === 'quality' && (
          <SleepQualityEmptyState />
        )}
        
        <SmartScheduleCard 
          daysToGreat={7} 
          onClick={() => navigate('/tools/smart-schedule')}
        />
        
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">
            {activeTab === 'times' 
              ? 'All sleep times' 
              : activeTab === 'debt' 
                ? 'All sleep debt' 
                : 'Sleep quality records'}
          </h3>
          
          {activeTab === 'times' && (
            <RecordListItem
              label="Last night (Tuesday)"
              sublabel="9:45p - 10:15a"
              value="3h 30m"
              onClick={() => navigate('/sleep/details/yesterday')}
            />
          )}
          
          {activeTab === 'debt' && (
            <RecordListItem
              label="Today"
              sublabel="April 2"
              value="12.8hrs debt"
              onClick={() => navigate('/sleep/debt/today')}
            />
          )}
          
          {activeTab === 'quality' && (
            <RecordListItem
              label="No quality ratings yet"
              sublabel="Start tracking today"
              value=""
              onClick={() => navigate('/tools/sleep-quality')}
            />
          )}
        </div>
        
        <SleepScienceTip
          title="Did you know?"
          description="Consistent sleep and wake times are more important than total sleep duration for feeling energized."
          actionText="Learn More"
          actionPath="/learn/sleep-consistency"
        />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Progress;

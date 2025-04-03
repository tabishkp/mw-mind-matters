
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const sampleSleepTimeData = [
  { day: 'WED', hours: 7.33, quality: 'OKAY', deep: 1.2, rem: 1.5, core: 4.63 },
  { day: 'THU', hours: 10.67, quality: 'GREAT', deep: 2.2, rem: 2.67, core: 5.8 },
  { day: 'FRI', hours: 6, quality: 'OKAY', debt: 3.8, deep: 0.8, rem: 0.9, core: 2.1 },
  { day: 'SAT', hours: 6.5, quality: 'OKAY', deep: 1.3, rem: 1.2, core: 4.0 },
  { day: 'SUN', hours: 4.17, quality: 'POOR', deep: 0.8, rem: 0.97, core: 2.4 },
  { day: 'MON', hours: 8, quality: 'OKAY', debt: 9.6, deep: 1.5, rem: 1.7, core: 1.8},
  { day: 'TUE', hours: 3.5, quality: 'POOR', deep: 0.5, rem: 0.8, core: 2.2 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  detailed?: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, detailed = false }) => {
  if (active && payload && payload.length) {
    const hours = payload[0].value;
    if (hours === 0) {
      return (
        <div className="bg-[#1A1F2C] p-2 rounded-md border border-gray-700 text-white">
          <p className="text-sm">No data</p>
        </div>
      );
    }
    
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    
    if (!detailed) {
      return (
        <div className="bg-[#1A1F2C] p-2 rounded-md border border-gray-700 text-white">
          <p className="text-sm">{label}: {wholeHours}h {minutes}m</p>
        </div>
      );
    } else {
      // Detailed breakdown of sleep stages
      const deepValue = payload.find(p => p.dataKey === 'deep')?.value || 0;
      const remValue = payload.find(p => p.dataKey === 'rem')?.value || 0;
      const coreValue = payload.find(p => p.dataKey === 'core')?.value || 0;
      
      const formatTime = (val: number) => {
        const h = Math.floor(val);
        const m = Math.round((val - h) * 60);
        return `${h}h ${m}m`;
      };
      
      return (
        <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm">Deep Sleep: <span className="text-blue-400">{formatTime(deepValue)}</span></p>
          <p className="text-sm">REM Sleep: <span className="text-purple-400">{formatTime(remValue)}</span></p>
          <p className="text-sm">Core Sleep: <span className="text-teal-400">{formatTime(coreValue)}</span></p>
          <div className="h-px bg-gray-700 my-1"></div>
          <p className="text-sm">Total: <span className="font-medium">{formatTime(hours)}</span></p>
        </div>
      );
    }
  }
  return null;
};

interface SleepTimeChartProps {
  showStages?: boolean;
}

const SleepTimeChart: React.FC<SleepTimeChartProps> = ({ showStages = false }) => {
  return (
    <div className="w-full h-[250px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sampleSleepTimeData} barCategoryGap="15%">
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9F9EA1' }}
          />
          <YAxis 
            domain={[0, 12]} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9F9EA1' }}
            tickFormatter={(value) => `${value === 0 ? '' : value}${value === 12 ? 'h' : value === 0 ? '' : 'h'}`}
          />
          <Tooltip content={<CustomTooltip detailed={showStages} />} />
          
          {showStages ? (
            <>
              <Legend 
                iconType="circle" 
                verticalAlign="top"
                wrapperStyle={{ paddingBottom: "10px" }}
              />
              <Bar 
                dataKey="deep" 
                name="Deep Sleep" 
                stackId="a" 
                fill="#3B82F6" 
                radius={[0, 0, 0, 0]}
              />
              <Bar 
                dataKey="rem" 
                name="REM Sleep" 
                stackId="a" 
                fill="#9b87f5" 
                radius={[0, 0, 0, 0]}
              />
              <Bar 
                dataKey="core" 
                name="Core Sleep" 
                stackId="a" 
                fill="#14B8A6" 
                radius={[4, 4, 0, 0]}
              />
            </>
          ) : (
            <Bar 
              dataKey="hours" 
              fill="#9b87f5"
              radius={[8, 8, 0, 0]} 
              background={{ fill: '#2A2C3B' }}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepTimeChart;

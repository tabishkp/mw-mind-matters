
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const sampleSleepTimeData = [
  { day: 'WED', hours: 7.33, quality: 'OKAY' },
  { day: 'THU', hours: 10.67, quality: 'GREAT' },
  { day: 'FRI', hours: 0, quality: 'MISSING' },
  { day: 'SAT', hours: 6.5, quality: 'OKAY' },
  { day: 'SUN', hours: 4.17, quality: 'POOR' },
  { day: 'MON', hours: 0, quality: 'MISSING' },
  { day: 'TUE', hours: 3.5, quality: 'POOR' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
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
    
    return (
      <div className="bg-[#1A1F2C] p-2 rounded-md border border-gray-700 text-white">
        <p className="text-sm">{label}: {wholeHours}h {minutes}m</p>
      </div>
    );
  }
  return null;
};

const SleepTimeChart: React.FC = () => {
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
            tickFormatter={(value) => `${value === 0 ? '' : value}${value === 12 ? 'p' : value === 0 ? '' : 'a'}`}
            reversed
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="hours" 
            fill="#9b87f5"
            radius={[8, 8, 0, 0]} 
            background={{ fill: '#2A2C3B' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepTimeChart;

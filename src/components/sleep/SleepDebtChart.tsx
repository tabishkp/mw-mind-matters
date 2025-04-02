
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const sampleSleepDebtData = [
  { day: 'WED', debt: 6.1 },
  { day: 'THU', debt: 6.4 },
  { day: 'FRI', debt: 3.8 },
  { day: 'SAT', debt: 0 },
  { day: 'SUN', debt: 5.5 },
  { day: 'MON', debt: 9.6 },
  { day: 'TUE', debt: 0 },
  { day: 'WED', debt: 12.8 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const debtValue = payload[0].value;
    
    return (
      <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm">Sleep Debt: <span className="text-red-400 font-medium">{debtValue}hrs</span></p>
      </div>
    );
  }
  return null;
};

const SleepDebtChart: React.FC = () => {
  return (
    <div className="w-full h-[250px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleSleepDebtData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9b4cf6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f54c8d" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9F9EA1' }}
          />
          <YAxis 
            domain={[0, 'dataMax + 2']} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9F9EA1' }}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="debt" 
            stroke="url(#colorDebt)" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#9b4cf6', stroke: '#9b4cf6' }}
            activeDot={{ r: 6, fill: '#9b4cf6', stroke: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepDebtChart;

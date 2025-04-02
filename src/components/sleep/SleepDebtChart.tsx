
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

const SleepDebtChart: React.FC = () => {
  return (
    <div className="w-full h-[250px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleSleepDebtData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1F2C',
              borderColor: '#333',
              borderRadius: 8,
              color: 'white',
            }}
            formatter={(value: number) => [`${value}hrs debt`, 'Sleep Debt']}
          />
          <Line 
            type="monotone" 
            dataKey="debt" 
            stroke="#9b87f5" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#9b87f5', stroke: '#9b87f5' }}
            activeDot={{ r: 6, fill: '#9b87f5', stroke: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepDebtChart;

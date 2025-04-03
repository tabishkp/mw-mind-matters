
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, Cell } from 'recharts';

const sampleSleepDebtData = [
  { day: 'WED', debt: 6.1, deep: 1.2, rem: 1.5, core: 3.4 },
  { day: 'THU', debt: 6.4, deep: 1.3, rem: 1.6, core: 3.5 },
  { day: 'FRI', debt: 3.8, deep: 0.8, rem: 0.9, core: 2.1 },
  { day: 'SAT', debt: 0, deep: 2.0, rem: 1.8, core: 4.2 },
  { day: 'SUN', debt: 5.5, deep: 1.1, rem: 1.4, core: 3.0 },
  { day: 'MON', debt: 9.6, deep: 0.5, rem: 0.7, core: 1.8 },
  { day: 'TUE', debt: 0, deep: 1.9, rem: 2.1, core: 4.0 },
  { day: 'WED', debt: 12.8, deep: 0.3, rem: 0.5, core: 1.2 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  chartMode: 'debt' | 'stages';
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, chartMode }) => {
  if (active && payload && payload.length) {
    if (chartMode === 'debt') {
      const debtValue = payload[0].value;
      
      return (
        <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm">Sleep Debt: <span className="text-red-400 font-medium">{debtValue}hrs</span></p>
        </div>
      );
    } else {
      // Sleep stages tooltip
      const deepValue = payload.find(p => p.dataKey === 'deep')?.value || 0;
      const remValue = payload.find(p => p.dataKey === 'rem')?.value || 0;
      const coreValue = payload.find(p => p.dataKey === 'core')?.value || 0;
      const totalSleep = deepValue + remValue + coreValue;
      
      return (
        <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm">Deep Sleep: <span className="text-blue-400 font-medium">{deepValue}hrs</span></p>
          <p className="text-sm">REM Sleep: <span className="text-purple-400 font-medium">{remValue}hrs</span></p>
          <p className="text-sm">Core Sleep: <span className="text-teal-400 font-medium">{coreValue}hrs</span></p>
          <div className="h-px bg-gray-700 my-2"></div>
          <p className="text-sm font-medium">Total: {totalSleep}hrs</p>
        </div>
      );
    }
  }
  return null;
};

interface SleepDebtChartProps {
  mode?: 'debt' | 'stages';
}

const SleepDebtChart: React.FC<SleepDebtChartProps> = ({ mode = 'debt' }) => {
  return (
    <div className="w-full h-[280px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        {mode === 'debt' ? (
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
            <Tooltip content={<CustomTooltip chartMode="debt" />} />
            <Line 
              type="monotone" 
              dataKey="debt" 
              stroke="url(#colorDebt)" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#9b4cf6', stroke: '#9b4cf6' }}
              activeDot={{ r: 6, fill: '#9b4cf6', stroke: 'white' }}
            />
          </LineChart>
        ) : (
          <BarChart data={sampleSleepDebtData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={0} barSize={20}>
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
              tickFormatter={(value) => `${value}h`}
            />
            <Tooltip content={<CustomTooltip chartMode="stages" />} />
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
              fill="#9b4cf6" 
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="core" 
              name="Core Sleep" 
              stackId="a" 
              fill="#14B8A6" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default SleepDebtChart;

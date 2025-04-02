
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine, Area, AreaChart } from 'recharts';
import { cn } from '@/lib/utils';

// Energy level data with time periods
const energyLevelData = [
  { time: '12:00am', energy: 10, period: 'sleep' },
  { time: '1:00am', energy: 5, period: 'sleep' },
  { time: '2:00am', energy: 3, period: 'sleep' },
  { time: '3:00am', energy: 2, period: 'sleep' },
  { time: '4:00am', energy: 1, period: 'sleep' },
  { time: '5:00am', energy: 5, period: 'sleep' },
  { time: '6:00am', energy: 15, period: 'wakeup' },
  { time: '7:00am', energy: 30, period: 'wakeup' },
  { time: '8:00am', energy: 60, period: 'morning-peak' },
  { time: '9:00am', energy: 85, period: 'morning-peak' },
  { time: '10:00am', energy: 95, period: 'morning-peak' },
  { time: '11:00am', energy: 90, period: 'morning-peak' },
  { time: '12:00pm', energy: 80, period: 'midday' },
  { time: '1:00pm', energy: 65, period: 'afternoon-dip' },
  { time: '2:00pm', energy: 50, period: 'afternoon-dip' },
  { time: '3:00pm', energy: 60, period: 'afternoon-dip' },
  { time: '4:00pm', energy: 70, period: 'recovery' },
  { time: '5:00pm', energy: 85, period: 'evening-peak' },
  { time: '6:00pm', energy: 90, period: 'evening-peak' },
  { time: '7:00pm', energy: 85, period: 'evening-peak' },
  { time: '8:00pm', energy: 75, period: 'evening-decline' },
  { time: '9:00pm', energy: 60, period: 'wind-down' },
  { time: '10:00pm', energy: 40, period: 'wind-down' },
  { time: '11:00pm', energy: 20, period: 'melatonin-window' },
];

// Custom tooltip component for the energy chart
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const periods = {
  'sleep': { label: 'Sleep', color: '#4338ca' },
  'wakeup': { label: 'Wake Up', color: '#c084fc' },
  'morning-peak': { label: 'Morning Peak', color: '#fbbf24' },
  'midday': { label: 'Midday', color: '#f97316' },
  'afternoon-dip': { label: 'Afternoon Dip', color: '#fb7185' },
  'recovery': { label: 'Recovery', color: '#a3e635' },
  'evening-peak': { label: 'Evening Peak', color: '#8b5cf6' },
  'evening-decline': { label: 'Evening Decline', color: '#7c3aed' },
  'wind-down': { label: 'Wind-down', color: '#4f46e5' },
  'melatonin-window': { label: 'Melatonin Window', color: '#3730a3' }
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const periodInfo = periods[data.period as keyof typeof periods];
    
    return (
      <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
        <p className="text-sm font-medium">{label} - {periodInfo.label}</p>
        <p className="text-sm">Energy: <span className="text-brand-purple font-medium">{data.energy}%</span></p>
        <div 
          className="mt-1 w-3 h-3 rounded-full inline-block"
          style={{ backgroundColor: periodInfo.color }}
        />
      </div>
    );
  }
  return null;
};

// Current time marker to show where we are in the day
const CurrentTimeLine: React.FC = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
  return (
    <ReferenceLine
      x={`${hours}:00${hours >= 12 ? 'pm' : 'am'}`}
      stroke="#ffffff"
      strokeDasharray="3 3"
      label={{
        value: "Now",
        position: "insideTopRight",
        style: { fill: "#ffffff", fontSize: 12 }
      }}
    />
  );
};

interface EnergyLevelChartProps {
  className?: string;
}

const EnergyLevelChart: React.FC<EnergyLevelChartProps> = ({ className }) => {
  const currentTime = new Date().getHours();
  
  // Find the current period
  const getCurrentPeriod = () => {
    const hourKey = `${currentTime}:00${currentTime >= 12 ? 'pm' : 'am'}`;
    const dataPoint = energyLevelData.find(d => d.time === hourKey) || 
                     energyLevelData[Math.min(currentTime, energyLevelData.length - 1)];
    return dataPoint?.period || 'midday';
  };
  
  const currentPeriod = getCurrentPeriod();
  const periodColor = periods[currentPeriod as keyof typeof periods]?.color || '#4f46e5';
  
  return (
    <div className={cn("w-full", className)}>
      <div className="h-[300px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={energyLevelData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#9F9EA1', fontSize: 10 }}
              interval={3}
            />
            <YAxis 
              domain={[0, 100]} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#9F9EA1' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="energy"
              stroke="#8b5cf6"
              strokeWidth={2} 
              fillOpacity={1}
              fill="url(#colorEnergy)"
            />
            {/* Time periods */}
            {Object.entries(periods).map(([period, info]) => {
              const periodPoints = energyLevelData.filter(d => d.period === period);
              if (periodPoints.length === 0) return null;
              
              const startIndex = energyLevelData.findIndex(d => d === periodPoints[0]);
              const endIndex = energyLevelData.findIndex(d => d === periodPoints[periodPoints.length - 1]);
              
              return (
                <ReferenceLine
                  key={period}
                  segment={[
                    { x: energyLevelData[startIndex].time, y: 0 },
                    { x: energyLevelData[endIndex].time, y: 0 }
                  ]}
                  stroke={info.color}
                  strokeWidth={4}
                />
              );
            })}
            <ReferenceLine
              x={`${currentTime}:00${currentTime >= 12 ? 'pm' : 'am'}`}
              stroke="#ffffff"
              strokeDasharray="3 3"
              label={{
                value: "Now",
                position: "insideTopRight",
                style: { fill: "#ffffff", fontSize: 12 }
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Energy period legend */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {Object.entries(periods).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center text-xs">
            <div 
              className="w-3 h-3 rounded-full mr-1" 
              style={{ backgroundColor: color }}
            />
            <span className="text-gray-300">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyLevelChart;

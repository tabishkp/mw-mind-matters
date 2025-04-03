
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import { SleepQualityEntry } from '@/contexts/SleepQualityContext';

interface SleepQualityHistoryChartProps {
  data: SleepQualityEntry[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const ratingValue = payload[0].value;
    let qualityText = "";
    
    if (ratingValue === 1) qualityText = "Terrible";
    else if (ratingValue === 2) qualityText = "Poor";
    else if (ratingValue === 3) qualityText = "Okay";
    else if (ratingValue === 4) qualityText = "Good";
    else if (ratingValue === 5) qualityText = "Awesome";
    
    return (
      <div className="bg-[#1A1F2C] p-3 rounded-md border border-gray-700 text-white">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm">Quality: <span className="text-brand-purple font-medium">{qualityText}</span></p>
        <p className="text-sm">Rating: <span className="text-brand-purple font-medium">{ratingValue}/5</span></p>
      </div>
    );
  }
  return null;
};

const SleepQualityHistoryChart: React.FC<SleepQualityHistoryChartProps> = ({ data }) => {
  const chartData = data.map(entry => {
    // Parse the date and format it as a short day name
    const date = new Date(entry.date);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dayDate = date.getDate();
    
    return {
      date: `${dayName} ${dayDate}`,
      rating: entry.rating,
      // Add color information based on rating
      color: entry.rating <= 2 ? '#f87171' : entry.rating === 3 ? '#fbbf24' : '#9b87f5'
    };
  });
  
  return (
    <div className="w-full h-[200px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} barGap={5} barCategoryGap="25%">
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9F9EA1', fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 5]} 
            axisLine={false} 
            tickLine={false}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fill: '#9F9EA1' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="rating" 
            radius={[4, 4, 0, 0]}
            background={{ fill: '#2A2C3B' }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepQualityHistoryChart;

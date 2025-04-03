
import React from 'react';

const SleepStagesLegend: React.FC = () => {
  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 mb-4">
      <div className="flex flex-wrap gap-4 justify-around">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
          <span className="text-xs">Deep Sleep</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
          <span className="text-xs">REM Sleep</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-teal-500 mr-2" />
          <span className="text-xs">Core Sleep</span>
        </div>
      </div>
    </div>
  );
};

export default SleepStagesLegend;

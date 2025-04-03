
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Relaxation: React.FC = () => {
  const navigate = useNavigate();
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

  const relaxationExercises = [
    {
      id: 'progressive',
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and then relax each muscle group to release physical tension',
      duration: '10 minutes',
      steps: [
        'Start by taking a few deep breaths',
        'Tense the muscles in your feet for 5 seconds, then relax',
        'Move up to your calves, thighs, and continue through your body',
        'End with tensing and relaxing your facial muscles'
      ]
    },
    {
      id: 'breathing',
      title: '4-7-8 Breathing Technique',
      description: 'A breathing pattern that promotes relaxation and helps with falling asleep',
      duration: '5 minutes',
      steps: [
        'Sit or lie in a comfortable position',
        'Exhale completely through your mouth',
        'Inhale quietly through your nose for 4 seconds',
        'Hold your breath for 7 seconds',
        'Exhale completely through your mouth for 8 seconds',
        'Repeat for at least 4 cycles'
      ]
    },
    {
      id: 'body-scan',
      title: 'Body Scan Meditation',
      description: 'A mindfulness technique focusing attention on different parts of your body',
      duration: '15 minutes',
      steps: [
        'Lie down in a comfortable position',
        'Focus on your breathing for a few moments',
        'Bring attention to your feet, noticing any sensations',
        'Slowly move attention up through your body',
        'Notice areas of tension and consciously relax them',
        'Complete the scan at the top of your head'
      ]
    }
  ];

  const toggleExercise = (id: string) => {
    if (activeExercise === id) {
      setActiveExercise(null);
    } else {
      setActiveExercise(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#121520] text-white p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="mr-2 text-gray-400"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-xl font-bold">Relaxation Techniques</h1>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h2 className="text-lg font-medium mb-3">Prepare your mind for sleep</h2>
        <p className="text-gray-300 mb-6">
          These evidence-based relaxation exercises can help calm your nervous system and prepare you for restful sleep.
        </p>
        
        <div className="space-y-4">
          {relaxationExercises.map((exercise) => (
            <div 
              key={exercise.id} 
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleExercise(exercise.id)}
              >
                <div>
                  <h3 className="font-medium text-white">{exercise.title}</h3>
                  <p className="text-sm text-gray-400">{exercise.duration}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={activeExercise === exercise.id ? "text-brand-purple" : "text-gray-400"}
                >
                  {activeExercise === exercise.id ? <Pause size={20} /> : <Play size={20} />}
                </Button>
              </div>
              
              {activeExercise === exercise.id && (
                <div className="p-4 border-t border-gray-700 bg-gray-800/30">
                  <p className="text-sm text-gray-300 mb-4">{exercise.description}</p>
                  <h4 className="text-sm font-medium mb-2">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 pl-2">
                    {exercise.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium mb-3">Benefits of Relaxation Practice</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Reduces stress and anxiety that can interfere with sleep</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Lowers heart rate and blood pressure</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Shifts your nervous system from "fight-or-flight" to "rest-and-digest"</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Relaxation;

import React from 'react';
import ExerciseCard from './ExerciseCard4';

const repetitions1 = [
  { text: 'Aumento de repeticiones:', count: 15 },
  { text: 'Aumento de repeticiones:', count: 13 },
  { text: 'Aumento de repeticiones:', count: 11 },
  { text: 'Repeticiones:', count: 9 },
];


const ExercisePage = () => {
  return (
    <div className="exercise-page1">
      <ExerciseCard title="Patada trasera de glúteos" repetitions={repetitions1} />
    </div>
  );
};

export default ExercisePage;

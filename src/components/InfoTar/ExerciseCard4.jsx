import React from 'react';
import ExerciseRepetition from './ExerciseRepetition';

const ExerciseCard6 = ({ title, repetitions }) => {
  return (
    <div className="exercise-card1">
      <div className="exercise-header">
        <h2 className="exercise-title">{title}</h2>
        <div className="exercise-icons">
          <span className="exercise-icon">{'<'}</span>
          <span className="exercise-icon">⋮</span>
        </div>
      </div>
      <div className="repetitions-list">
        {repetitions.map((rep, index) => (
          <ExerciseRepetition
            key={index}
            repetition={rep.text}
            count={rep.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseCard6;

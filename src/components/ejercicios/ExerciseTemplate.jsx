import React from 'react';
import ExerciseSection from './ExerciseSection';

const ExerciseTemplate = ({ sections ,onCardClick}) => (
  <div className="exercise-template">
    {sections.map((section, index) => (
      <ExerciseSection key={index} title={section.title} exercises={section.exercises} onCardClick={onCardClick} />
    ))}
  </div>
);

export default ExerciseTemplate;

import React from 'react';
import ExerciseSection from './ExerciseSection';

const ExerciseTemplate = ({ sections }) => (
  <div className="exercise-template">
    {sections.map((section, index) => (
      <ExerciseSection key={index} title={section.title} exercises={section.exercises} />
    ))}
  </div>
);

export default ExerciseTemplate;

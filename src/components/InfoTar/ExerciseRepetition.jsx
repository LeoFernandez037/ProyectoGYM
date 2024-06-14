import React from 'react';
import Text from './Text';

const ExerciseRepetition = ({ repetition, count }) => {
  return (
    <div className="exercise-repetition">
      <Text className="repetition-text">{repetition}</Text>
      <Text className="count-text">{count}</Text>
    </div>
  );
};

export default ExerciseRepetition;

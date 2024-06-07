import React from 'react';
import Text from '../InfoTar/Text';

const ExerciseInfo = ({ icon, text }) => {
  return (
    <div className="exercise-info">
      <img src={icon} alt="Icon" className="exercise-info-icon" />
      <Text className="exercise-info-text">{text}</Text>
    </div>
  );
};

export default ExerciseInfo;

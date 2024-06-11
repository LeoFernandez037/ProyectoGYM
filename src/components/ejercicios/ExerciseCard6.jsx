import React from 'react';
import Image from './Image';
import Text from './Text1';

const ExerciseCard6 = ({ nombreE, musculo, InformacionE, imagen,onClick}) => (
   <div className="exercise-card" onClick={onClick}>
  <Image src={imagen} alt={nombreE} />
  <div className="exercise-info">
    <Text className="exercise-title">{nombreE}</Text>
    <Text className="exercise-subtitle">{musculo}</Text>
  </div>
  <Text className="exercise-description">{InformacionE}</Text>
</div>
);

export default ExerciseCard6;

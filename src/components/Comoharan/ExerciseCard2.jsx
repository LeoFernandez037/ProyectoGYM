import React from 'react';
import ExerciseInfo from './ExerciseInfo';
import ExerciseVideo from './ExerciseVideo';
import Button from './Button';

const ExerciseCard2 = ({ title, muscleGroup, duration, calories, description, video }) => {
  return (
    <div className="exercise-card">
      <img src="abdomi.png" alt="Exercise" className="exercise-image" />
      <div className="exercise-details">
        <h2 className="exercise-title">{title}</h2>
        <span className="exercise-muscle-group">{muscleGroup}</span>
        <div className="exercise-info-container">
          <ExerciseInfo icon="Play.png" text={`${duration} min`} />
          <ExerciseInfo icon="Flame.png" text={`${calories} Cal`} />
        </div>
        <p className="exercise-description">{description}</p>
        <ExerciseVideo
          videoThumbnail="braa.png"
          title={video.title}
          duration={video.duration}
        />
        <Button className="exercise-button">Iniciar el ejercicio</Button>
      </div>
    </div>
  );
};

export default ExerciseCard2;

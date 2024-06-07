import React from 'react';
import ExerciseCard2 from './ExerciseCard2';

const ExerciseDetailPage = () => {
  const exerciseInfo = {
    title: 'Flexiones',
    muscleGroup: 'Ejercicio de Pecho',
    duration: 60,
    calories: 350,
    description: 'Las flexiones son una forma efectiva de fortalecer el pecho, los hombros, los tríceps y el core, mientras se mejora la resistencia muscular. Para principiantes, puede ser recomendable comenzar con un número más bajo, como 5 a 10 flexiones por serie.',
    video: {
      thumbnail: 'exercise-video-thumbnail.jpg',
      title: 'Manera correcta de hacer el ejercicio',
      duration: '0:30'
    }
  };

  return (
    <div className="exercise-detail-page">
      <ExerciseCard2
        title={exerciseInfo.title}
        muscleGroup={exerciseInfo.muscleGroup}
        duration={exerciseInfo.duration}
        calories={exerciseInfo.calories}
        description={exerciseInfo.description}
        video={exerciseInfo.video}
      />
    </div>
  );
};

export default ExerciseDetailPage;

import React from 'react';
import Slider from 'react-slick';
import ExerciseCard from './ExerciseCard6';


const ExerciseSection6 = ({ title, exercises,onCardClick }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <div className="exercise-section">
        <h2>{title}</h2>
        <Slider {...settings}>
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              nombreE={exercise.nombreE}
              musculo={exercise.musculo}
              InformacionE={exercise.InformacionE}
              imagen={exercise.imagen}
              onClick={() => onCardClick(exercise)}
            />
          ))}
        </Slider>
      </div>
    );
  };
  
  export default ExerciseSection6;
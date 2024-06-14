import React from "react";
import ExerciseRepetition from "./ExerciseRepetition";
import { Link } from "react-router-dom";

const ExerciseCard = ({ title, repetitions }) => {
  return (
    <div className="exercise-card1">
      <div className="exercise-header">
        <Link to="/historial">
          <button className="buttontranspartent">
            <span className="exercise-icon">{"<"}</span>
          </button>
        </Link>
        <h2 className="exercise-title">{title}</h2>
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

export default ExerciseCard;

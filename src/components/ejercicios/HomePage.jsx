import React, { useEffect, useState } from "react";
import ExerciseTemplate from "./ExerciseTemplate";
import { fetchExercises } from "./api";
import "./HomePage.css";
import ExerciseDetailPage from "./ExerciseDetailPage";
const HomePage = () => {
  const [sections, setSections] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    fetchExercises().then((data) => {
      const groupedData = {
        "Ejercicios Pecho": data.filter((e) => e.musculo === "Pecho"),
        "Ejercicios Pierna": data.filter((e) => e.musculo === "Pierna"),
        "Ejercicios Gluteos": data.filter((e) => e.musculo === "Glúteos"),
      };
      const formattedSections = Object.keys(groupedData).map((key) => ({
        title: key,
        exercises: groupedData[key],
      }));
      setSections(formattedSections);
    });
  }, []);
  const handleCardClick = (exercise) => {
    setSelectedExercise(exercise);
  };
  const handleBack = () => {
    setSelectedExercise(null);
  };

  if (selectedExercise) {
    return <ExerciseDetailPage exercise={selectedExercise} onBack={handleBack} />;
  }

  return (
    <div className="homepage">
      <div className="pase">
        <h1>Rutinas personalizadas</h1>
        <h2>¡Elabora tu rutina personal y única!</h2>
      </div>
      <div className="ejercicio">EJERCICIOS</div>
      <ExerciseTemplate sections={sections}  onCardClick={handleCardClick}/>
    </div>
  );
};

export default HomePage;

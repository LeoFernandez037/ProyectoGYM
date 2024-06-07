import React, { useEffect, useState } from "react";
import ExerciseTemplate from "./ExerciseTemplate";
import { fetchExercises } from "./api";
import "./HomePage.css";

const HomePage = () => {
  const [sections, setSections] = useState([]);

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

  return (
    <div className="homepage">
      <div className="pase">
        <h1>Rutinas personalizadas</h1>
        <h2>¡Elabora tu rutina personal y única!</h2>
      </div>
      <div className="ejercicio">EJERCICIOS</div>
      <ExerciseTemplate sections={sections} />
    </div>
  );
};

export default HomePage;

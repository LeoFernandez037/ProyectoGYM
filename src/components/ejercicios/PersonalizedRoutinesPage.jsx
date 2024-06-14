import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button1';
import './PersonalizedRoutinesPage.css';

const PersonalizedRoutinesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [addedExercises, setAddedExercises] = useState([]);

  // Función para cargar ejercicios desde la API
  const loadExercises = async () => {
    try {
      const response = await fetch('https://6663ce1a932baf9032a90f5a.mockapi.io/api/User/EjercicioG');
      const data = await response.json();
      setAddedExercises(data);
    } catch (error) {
      console.error('Error loading exercises:', error);
    }
  };

  useEffect(() => {
    loadExercises(); // Cargar ejercicios al montar el componente

    if (location.state?.addedExercise) {
      setAddedExercises(prevExercises => [...prevExercises, location.state.addedExercise]);
    }
  }, [location.state]);

  return (
    <div className="personalized-routines-page">
      <h1>Rutinas personalizadas</h1>
      <p>¡Elabora tu rutina personal y única!</p>
      <div className="exercises-container">
        {addedExercises.length > 0 ? (
          addedExercises.map((exercise, index) => (
            <div key={index} className="exercise-card">
              <img src={exercise.imagen} alt={exercise.nombreG} className="exercise-image" />
              <h2>{exercise.nombreG}</h2>
              <p>Tipo de músculo: {exercise.musculog}</p>
              <p>Cantidad: {exercise.numeroE}</p>
            </div>
          ))
        ) : (
          <p>No se ha agregado ningún ejercicio.</p>
        )}
      </div>
      <Button className="back-button" onClick={() => navigate(-1)}>Volver</Button>
    </div>
  );
};

export default PersonalizedRoutinesPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import Button from './Button1';
import './ExerciseDetailPage.css';

const ExerciseDetailPage = ({ exercise, user, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAdd = () => {
    const newExercise = {
      musculog: exercise.musculo,
      nombreG: exercise.nombreE,
      imagen: exercise.imagen,
      usuario: user,
      numeroE: quantity,
    };

    fetch('https://6663ce1a932baf9032a90f5a.mockapi.io/api/User/EjercicioG', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExercise),
    })
      .then(response => response.json())
      .then(data => {
        navigate('/personalized-routines', { state: { addedExercise: data } }); // Redirige y pasa el ejercicio agregado
      })
      .catch(error => console.error('Error saving exercise:', error));
  };

  return (
    <div className="exercise-detail-page">
      <h1>{exercise.nombreE}</h1>
      <Image src={exercise.imagen} alt={exercise.nombreE} />
      <div className="exercise-info-detail">
        <h2>Ejercicio de {exercise.musculo}</h2>
        <p>{exercise.InformacionE}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Seleccione Cantidad</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="50"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="buttons">
          <Button className="add-button" onClick={handleAdd}>Agregar</Button>
          <Button className="back-button" onClick={onBack}>Volver</Button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;

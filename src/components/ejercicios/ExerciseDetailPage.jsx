import React, { useState } from 'react';
import Image from './Image';
import Button1 from './Button1';
import './ExerciseDetailPage.css';

const ExerciseDetailPage = ({ exercise, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="exercise-detail-page">
      <h1>{exercise.nombreE}</h1>
      <Image src={exercise.imagen} alt={exercise.nombreE} />
      <p>{exercise.InformacionE}</p>
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
          <Button1 className="add-button">Agregar</Button1>
          <Button1 className="back-button" onClick={onBack}>Volver</Button1>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailPage;

import React from "react";
import { Link } from "react-router-dom";
import "./Informacion.css";

function Informacion() {
  return (
    <div className="containerI">
      <div className="inf-card">
        <h1 className="rajdhani-bold">Información</h1>
        <div className="Tarjeta">
          <div className="buttonContainer">
            <Link to="/historial">
              <button className="inf-button">Historial de entrenamiento</button>
            </Link>
            <h2>Etapas de aumentar peso</h2>
          </div>
          <div className="buttonContainer">
            <Link to="/nutricion">
              <button className="inf-button">Dieta</button>
            </Link>
            <h2>Dieta de masa y volumen</h2>
          </div>
          <div className="buttonContainer">
            <Link to="/rutina">
              <button className="inf-button">Rutina de ejercicios</button>
            </Link>
            <h2>Rutinas personalizadas para ti</h2>
          </div>
          <Link to="/music">
            <button className="inf-button">Reproductor de Musica</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Informacion;

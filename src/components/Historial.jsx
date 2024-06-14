import React from "react";
import { Link } from "react-router-dom";
import "./Historial.css";
import Imagen1 from "../assets/Gluteos.jpg";
import Imagen2 from "../assets/Pecho.jpg";

function Historial() {
  return (
    <div className="containerH">
      <div className="his-card">
        <div className="his-header">
          <Link to="/informacion">
            <span className="arrow1">⬅</span>
          </Link>
          <h1>Historial de entrenamiento</h1>
        </div>
        <div className="workout-card">
          <img className="Gluteos" src={Imagen1} alt="Ejercicio GYM" />
          <div>
            <h2>Ejercicio de gluteos</h2>
          </div>
          <Link to="/ejercicio">
            <span className="arrow">➡</span>
          </Link>
        </div>
        <div className="workout-card">
          <img className="Gluteos" src={Imagen2} alt="Ejercicio GYM" />
          <div>
            <h2>Ejercicio de pecho</h2>
          </div>
          <Link to="/informacion">
            <span className="arrow">➡</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Historial;

import React from "react";
import "./Ejercicio.css";
import ImagenPress from "../assets/press.jpg";
import { Link } from "react-router-dom";

function Ejercicio2() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="card">
      <div className="exer">
        <img className="exer" src={ImagenPress} alt="" />
      </div>
      <div className="exercard">
        <div className="tittlesexer">
          <div>
            <div className="atom">Press Inclinado</div>
            <span className="time1">Ejercicios de Pecho</span>
          </div>
        </div>
        <div className="botns">
          <button className="botn1">▶️ 40 min</button>
          <button className="botn2">🔥 250 Cal</button>
        </div>
        <div className="just">
        Como regla general, puedes comenzar con un peso que te permita completar de 8 a 12 repeticiones por serie. Esto te ayudará a desarrollar fuerza y tamaño muscular de manera efectiva.
        </div>

        <div className="notif">
          <img className="exer1" src={ImagenPress} alt="" />
          <div className="letter">
            Manera correcta de hacer el ejercicio
            <span className="time">9:38 AM</span>
          </div>
        </div>
        <div className="volv">
          <button className="boton123" onClick={handleGoBack}>
            Volver
          </button>

          <Link to="/ejercicio3">
            <button className="boton123">Añadir</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio2;

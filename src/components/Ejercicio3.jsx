import React from "react";
import "./Ejercicio.css";
import Img124 from "../assets/maripo.jpg";
import { Link } from "react-router-dom";

function Ejercicio3() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="card">
      <div className="exer">
        <img className="exer" src={Img124} alt="" />
      </div>
      <div className="exercard">
        <div className="tittlesexer">
          <div>
            <div className="atom">Mariposa</div>
            <span className="time1">Ejercicios de Pecho</span>
          </div>
        </div>
        <div className="botns">
          <button className="botn1">▶️ 30 min</button>
          <button className="botn2">🔥 450 Cal</button>
        </div>
        <div className="just">
        Si estás buscando aumentar la resistencia muscular, puedes optar por un peso más ligero y hacer de 12 a 15 repeticiones por serie. Por otro lado, si tu enfoque está en la fuerza máxima, puedes trabajar con un peso más pesado y hacer menos repeticiones, como de 4 a 6 por serie.
        </div>

        <div className="notif">
          <img className="exer1" src={Img124} alt="" />
          <div className="letter">
            Manera correcta de hacer el ejercicio
            <span className="time">9:38 AM</span>
          </div>
        </div>
        <div className="volv">
          <button className="boton123" onClick={handleGoBack}>
            Volver
          </button>

          <Link to="/casa">
            <button className="boton123">Añadir</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio3;

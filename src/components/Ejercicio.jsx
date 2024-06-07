import React from "react";
import "./Ejercicio.css";
import Imagen1 from "../assets/flexion.jpg";
import { Link } from "react-router-dom";

function Ejercicio() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="card">
      <div className="exer">
        <img className="exer" src={Imagen1} alt="" />
      </div>
      <div className="notification">
        <div className="tittleTime">
          <div>
            <div className="atom">Flexiones</div>
            <span className="time1">Ejercicios de Pecho</span>
          </div>
        </div>
        <div className="botns">
          <button className="botn1">▶️ 60 min</button>
          <button className="botn2">🔥 350 Cal</button>
        </div>
        <div className="just">
          Las flexiones son una forma efectiva de fortalecer el pecho, los
          hombros, los tríceps y el core, mientras se mejora la resistencia
          muscular. Para principiantes, puede ser recomendable comenzar con un
          número más bajo, como 5 a 10 flexiones por serie
        </div>

        <div className="notif">
          <img className="exer1" src={Imagen1} alt="" />
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
            <button className="boton123">
              Añadir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio;

import React from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import DescansoImg from "../assets/DescansoImg.png";
import "./Descanso.css";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart: false,
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div class="ContenedorContador">
      <h1 class="DescansoHeader">Hora del descanso</h1>
      <div className="buttonsContainer">
        <button
          class="botonTiempo"
          onClick={() => {
            // Restarts to 1 minute timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60);
            restart(time, false);
          }}
        >
          Descanso Corto
        </button>
        <button
          class="botonTiempo"
          onClick={() => {
            // Restarts to 2 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 120);
            restart(time, false);
          }}
        >
          Descanso Medio
        </button>
        <button
          class="botonTiempo"
          onClick={() => {
            // Restarts to 3 minute timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 180);
            restart(time, false);
          }}
        >
          Descanso Largo
        </button>
        <button
          class="botonTiempo"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time, false);
          }}
        >
          Descanso Extra Largo
        </button>
      </div>

      <div class="Contador">
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <button class="Btn_Control" onClick={start}>
        Iniciar
      </button>
      <button class="Btn_Control" onClick={pause}>
        Pausar
      </button>
      <Link to="/home">
        <button class="Btn_Control">Continuar</button>
      </Link>
    </div>
  );
}

export default function Descanso() {
  const imgsrc = DescansoImg;
  return (
    <>
      <div className="DescansoContainer">
        <img src={imgsrc} alt="no image found" />
        <MyTimer />
      </div>
    </>
  );
}

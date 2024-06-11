import React from "react";
import { Link } from "react-router-dom";
import "./Cronograma.css";
import Image1 from "../../assets/Gluteos.jpg";
import Image2 from "../../assets/Descanso.jpeg";
import Image3 from "../../assets/prensaDePierna.jpeg";
import Image4 from "../../assets/step-up.jpg";

function Cronograma() {
    return (
        <div className="containerCro">
            <div className="cro-card">
                <div className="cro-header">
                    <Link to="/menuIn">
                        <span className="arrw1">⬅</span>
                    </Link>
                    <h1>Cronograma de sesiones</h1>
                </div>
                <div className="crono-card">
                    <img className="Gluteos" src={Image1} alt="Ejercicio GYM" />
                    <div className="crono-details">
                        <h2>Ejercicio de gluteos</h2>
                        <div className="time-container">
                            <strong>Hora: </strong>
                            <p className="time">10:00 am</p>
                        </div>
                    </div>
                    <Link to="/InfoTar">
                        <span className="arro">➡</span>
                    </Link>
                </div>
                <div className="crono-card">
                    <img className="Gluteos" src={Image2} alt="Ejercicio GYM" />
                    <div className="crono-details">
                        <h2>Descanso</h2>
                        <div className="time-container">
                            <strong>Hora: </strong>
                            <p className="time">10:00 am</p>
                        </div>
                    </div>
                    <Link to="/informacion">
                        <span className="arro">➡</span>
                    </Link>
                </div>
                <div className="crono-card">
                    <img className="Gluteos" src={Image3} alt="Ejercicio GYM" />
                    <div className="crono-details">
                        <h2>Prensa de pierna</h2>
                        <div className="time-container">
                            <strong>Hora: </strong>
                            <p className="time">10:00 am</p>
                        </div>
                    </div>
                    <Link to="/informacion">
                        <span className="arro">➡</span>
                    </Link>
                </div>
                <div className="crono-card">
                    <img className="Gluteos" src={Image4} alt="Ejercicio GYM" />
                    <div className="crono-details">
                        <h2>Step up</h2>
                        <div className="time-container">
                            <strong>Hora: </strong>
                            <p className="time">10:00 am</p>
                        </div>
                    </div>
                    <Link to="/informacion">
                        <span className="arro">➡</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cronograma;
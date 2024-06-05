import React from 'react';
import { Link } from 'react-router-dom';
import './Informacion.css';

function Informacion() {
    return (
        <div className="containerI">
            <div className="inf-card">
                <h1>Informacion</h1>
                <div className="Tarjeta">
                    <Link to="/historial">
                        <button className="inf-button">Historial de entrenamiento</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Etapas de aumentar peso</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Dieta</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Dieta de masa y volumen</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Rutina de ejercicios</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Rutinas personalizadas para ti</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Informacion;
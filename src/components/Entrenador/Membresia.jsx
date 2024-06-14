import React from 'react';
import { Link } from "react-router-dom";
import './Membresia.css';

function Membresia() {
    const handleAccept = () => {
        alert('Solicitud aceptada');
    };

    const handleReject = () => {
        alert('Solicitud rechazada');
    };
    return (
        <div className="containerMem">
            <div className="Mem-container">
                <div className="Mem-header">
                    <Link to="/menuIn">
                        <span className="arow1">⬅</span>
                    </Link>
                    <h1>Solicitudes/Membresias</h1>
                </div>
                <div className="Mem-card">
                    <div className="Mem-info">
                        <p>Miriam Sofia:</p>
                        <p>Membresia: 3 meses</p>
                    </div>
                    <div className="Mem-details">
                        <div className="Mem-date">
                            <p>Inicio:</p><strong>12/02/2025</strong>
                        </div>
                        <div className="Mem-date">
                            <p>Caduca:</p><strong>12/05/2025</strong>
                        </div>
                        <p>Datos personales registrados!</p>
                        <div className="Mem-date">
                            <p>Sexo:</p><strong>Mujer</strong>
                        </div>
                    </div>
                    <div className="Mem-buttons">
                        <button className="accept" >Aceptar</button>
                        <button className="reject" >Rechazar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membresia;
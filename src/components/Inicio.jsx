import React from 'react';
import { Link } from "react-router-dom";
import './Inicio.css';

function Inicio() {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="Imagen">
                </div>
                <Link to="/login">
                    <button>Iniciar Sesión</button>
                </Link>
                <Link to="/register">
                    <button >Registrarse</button>
                </Link>
            </div>
        </div>
    )
}

export default Inicio
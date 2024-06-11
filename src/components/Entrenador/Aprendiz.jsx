import React, { useState } from 'react';
import './Aprendiz.css';

function Aprendiz() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(true);
    };

    return (
        <div className="apren">
            <div className="apren-container">
                <h1>Aprendices</h1>
                <div className={`task ${isExpanded ? 'expanded' : ''}`}>

                    {!isExpanded && (
                        <button className="expand-button" onClick={handleExpandClick}>
                            <div className="task-header">
                                <span>Adan Carlos:</span>
                                <span>Rutina: Piernas</span>
                            </div>
                        </button>
                    )}
                    <h2>Peso muerto con pierna</h2>
                    <h2>Empezado hace 10 minutos</h2>
                    {isExpanded && (
                        <div className="task-footer">
                            <span>Patada trasera de gluteos</span>
                            <span>Terminado</span>
                            <button className="validate-button">Validar sesión</button>
                            <button className="noV-button">No validar sesión</button>
                        </div>
                    )}
                </div>
                <div className={`task ${isExpanded ? 'expanded' : ''}`}>

                    {!isExpanded && (
                        <button className="expand-button" onClick={handleExpandClick}>
                            <div className="task-header">
                            <span>Maria Alarcon:</span>
                            <span>Rutina: Piernas</span>
                            </div>
                        </button>
                    )}
                    <h2>Patada trasera de gluteos</h2>
                    <h2>Empezado hace 5 minutos</h2>
                    {isExpanded && (
                        <div className="task-footer">
                            <span>Patada trasera de gluteos</span>
                            <span>Terminado</span>
                            <button className="validate-button">Validar sesión</button>
                            <button className="noV-button">No validar sesión</button>
                        </div>
                    )}
                </div>
                <div className={`task ${isExpanded ? 'expanded' : ''}`}>

                    {!isExpanded && (
                        <button className="expand-button" onClick={handleExpandClick}>
                            <div className="task-header">
                                <span>Marcos Matias:</span>
                                <span>Rutina: Pendiente</span>
                            </div>
                        </button>
                    )}
                    <h2>Pendiente</h2>
                    <h2>No asignado</h2>
                    {isExpanded && (
                        <div className="task-footer">
                            <span>Patada trasera de gluteos</span>
                            <span>Terminado</span>
                            <button className="validate-button">Validar sesión</button>
                            <button className="noV-button">No validar sesión</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default Aprendiz
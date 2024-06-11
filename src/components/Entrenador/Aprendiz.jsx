import React, { useState } from 'react';
import './Aprendiz.css';

function Aprendiz() {
    const [expandedTask, setExpandedTask] = useState(null);

    const handleExpandClick = (taskId) => {
        setExpandedTask(taskId);
    };

    const taskData = [
        { id: 1, name: 'Adan Carlos', routine: 'Piernas', currentTask: 'Peso muerto con pierna', startTime: 'Empezado hace 10 minutos', status: 'Terminado' },
        { id: 2, name: 'Maria Alarcon', routine: 'Piernas', currentTask: 'Patada trasera de gluteos', startTime: 'Empezado hace 5 minutos', status: 'Terminado' },
        { id: 3, name: 'Marcos Matias', routine: 'Pendiente', currentTask: 'Pendiente', startTime: 'No asignado', status: 'No Terminado' }
    ];

    return (
        <div className="apren">
            <div className="apren-container">
                <h1>Aprendices</h1>
                {taskData.map(task => (
                    <div key={task.id} className={`task ${expandedTask === task.id ? 'expanded' : ''}`}>
                        <button className="expand-button" onClick={() => handleExpandClick(task.id)}>
                            <div className="task-header">
                                <span>{task.name}:</span>
                                <span>Rutina: {task.routine}</span>
                            </div>
                        </button>
                        {expandedTask !== task.id && (
                            <>
                                <h2>{task.currentTask}</h2>
                                <h2>{task.startTime}</h2>
                            </>
                        )}
                        {expandedTask === task.id && (
                            <div className="task-footer">
                                <h2>{task.currentTask}</h2>
                                <h2>{task.status}</h2>
                                <button className="validate-button">Validar sesión</button>
                                <button className="noV-button">No validar sesión</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aprendiz;
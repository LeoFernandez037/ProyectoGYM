import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './EnviarNoti.css';

function EnviarNoti() {
    const [message, setMessage] = useState('');
    const [scheduled, setScheduled] = useState(false);

    const handleSaveAndSend = () => {
        // Logic to save and send the message
        console.log('Message saved and sent:', message);
        setMessage('');
        setScheduled(false);
    };

    const handleDiscard = () => {
        setMessage('');
        setScheduled(false);
    };

    const handleSchedule = () => {
        setScheduled(true);
    };

    return (
        <div className="enviarNoti-container">
            <div className="enviarNoti-card">
            <div className="enviarNoti-header">
                    <Link to="/notiEnt">
                        <span className="rrrw1">⬅</span>
                    </Link>
                    <h1>Notificaciones</h1>
                </div>
                <button className={`schedule-button ${scheduled ? 'active' : ''}`} onClick={handleSchedule}>
                    Promocion
                </button>
                {scheduled && (
                    <div className="enviarNoti-form">
                        <p>Promocion por fin de semana...</p>
                        <span className="enviarNoti-time">9:45 AM</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ingrese texto..."
                        />
                        <div className="enviarNoti-buttons">
                            <button className="discard-button" onClick={handleDiscard}>
                                Descartar
                            </button>
                            <button className="save-send-button" onClick={handleSaveAndSend}>
                                Guardar y enviar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnviarNoti
import React, { useState } from "react";
import "./NotiEntre.css";

function NotiEntre() {
    const [selectedTab, setSelectedTab] = useState("Promociones");
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <div className="notifi">
            <div className="noti-card">
                <h1 class="noti-bold">Notificaciones</h1>
                <div className="tabas">
                    <button
                        className={`taba ${selectedTab === "Nuevo" ? "active" : ""}`}
                        onClick={() => handleTabChange("Nuevo")}
                    >
                        Nuevo
                    </button>
                    <button
                        className={`taba ${selectedTab === "Promociones" ? "active" : ""}`}
                        onClick={() => handleTabChange("Promociones")}
                    >
                        Promociones
                    </button>
                    <button
                        className={`taba ${selectedTab === "Todo" ? "active" : ""}`}
                        onClick={() => handleTabChange("Todo")}
                    >
                        Todo
                    </button>
                </div>
                <div className="noti-list">
                    {selectedTab === "Promociones" && (
                        <>
                            <div className="noti">
                                <div className="tittleNoti">
                                    <h3>Especial año nuevo</h3>
                                    <span className="timeNoti">9:45 AM</span>
                                </div>
                                <p>
                                    Inscríbete en enero y obtén un 40% de descuento en tus
                                    primeros tres meses de membresía.
                                </p>
                            </div>
                            <div className="noti">
                                <div className="tittleNoti">
                                    <h3>Promocion</h3>
                                    <span className="timeNoti">9:38 AM</span>
                                </div>
                                <p>
                                    Esta semana, todos los miércoles son Día de Invitado en
                                    nuestro gimnasio. ¡Trae a un amigo y ambos recibirán un pase
                                    de un día GRATIS!
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NotiEntre
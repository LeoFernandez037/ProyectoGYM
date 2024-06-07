import React, { useState } from "react";
import "./Notificacion.css";

function Notificacion() {
  const [selectedTab, setSelectedTab] = useState("Promociones");
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="notifications">
      <div className="not-card">
        <h2 class="rajdhani-bold">Notificaciones</h2>
        <div className="tabs">
          <button
            className={`tab ${selectedTab === "Nuevo" ? "active" : ""}`}
            onClick={() => handleTabChange("Nuevo")}
          >
            Nuevo
          </button>
          <button
            className={`tab ${selectedTab === "Promociones" ? "active" : ""}`}
            onClick={() => handleTabChange("Promociones")}
          >
            Promociones
          </button>
          <button
            className={`tab ${selectedTab === "Todo" ? "active" : ""}`}
            onClick={() => handleTabChange("Todo")}
          >
            Todo
          </button>
        </div>
        <div className="notifications-list">
          {selectedTab === "Promociones" && (
            <>
              <div className="notification">
                <div className="tittleTime">
                  <h3>Especial año nuevo</h3>
                  <span className="time">9:45 AM</span>
                </div>
                <p>
                  Inscríbete en enero y obtén un 40% de descuento en tus
                  primeros tres meses de membresía.
                </p>
              </div>
              <div className="notification">
                <div className="tittleTime">
                  <h3>Promocion</h3>
                  <span className="time">9:38 AM</span>
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

export default Notificacion;
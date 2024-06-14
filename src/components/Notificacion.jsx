import React, { useState, useEffect } from "react";
import { fetchNotis } from "./ejercicios/api";
import "./Notificacion.css";
import Notification from "./Notification";

function Notificacion() {
  const [selectedTab, setSelectedTab] = useState("Promociones");
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    fetchNotis().then((data) => {
      const groupedDataNotis = {
        Nuevo: data.filter((e) => e.tipo === "Nuevo"),
        Promociones: data.filter((e) => e.tipo === "Promociones"),
      };
      setNotis(groupedDataNotis);
    });
  }, []);
  const [notis, setNotis] = useState([]);
  return (
    <div className="notifications">
      <div className="not-card">
        <h1 className="rajdhani-bold">Notificaciones</h1>
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
              {notis.Promociones?.map((notificacion) => (
                <Notification
                  key={notificacion.id}
                  titulo={notificacion.tittle}
                  contenido={notificacion.content}
                  hora={notificacion.createdAt}
                ></Notification>
              ))}
            </>
          )}
          {selectedTab === "Nuevo" && (
            <>
              {notis.Nuevo?.map((notificacion) => (
                <Notification
                  key={notificacion.id}
                  titulo={notificacion.tittle}
                  contenido={notificacion.content}
                  hora={notificacion.createdAt}
                ></Notification>
              ))}
            </>
          )}
          {selectedTab === "Todo" && (
            <>
              {notis.Nuevo?.map((notificacion) => (
                <Notification
                  key={notificacion.id}
                  titulo={notificacion.tittle}
                  contenido={notificacion.content}
                  hora={notificacion.createdAt}
                ></Notification>
              ))}
              {notis.Promociones?.map((notificacion) => (
                <Notification
                  key={notificacion.id}
                  titulo={notificacion.tittle}
                  contenido={notificacion.content}
                  hora={notificacion.createdAt}
                ></Notification>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notificacion;
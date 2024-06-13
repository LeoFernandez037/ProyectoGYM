import React, { useState, useEffect } from "react";
import "./Notificacion.css";
import Chatbot from "react-chatbot-kit";
import config from "./configs/config.js";
import MessageParser from "./configs/MessageParser";
import ActionProvider from "./configs/ActionProvider";

function Notificacion() {
  return (
    <div className="notifications">
      <div className="not-card">
        <h1 className="rajdhani-bold">Nutricion</h1>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default Notificacion;

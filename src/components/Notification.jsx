import React from "react";

function Notification({ titulo, contenido, hora }) {
  // const horanueva = hora.split();
  // console.log(horanueva);
  return (
    <div className="notification">
      <div className="tittleTime">
        <h3>{titulo}</h3>
        <span className="time">{hora}</span>
      </div>
      <p>{contenido}</p>
    </div>
  );
}

export default Notification;

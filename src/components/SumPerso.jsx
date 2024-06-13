import React from "react";
import "./SumPerso.css";
import Imagen1 from "../assets/flexion.jpg";
function SumPerso() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="card10">
      <div className="dscns">
        <img className="imagn1" src={Imagen1} alt="" />
      </div>
      <div className="tarj1">
      <WheelPickerComponent/>
        <div className="volv">          
            <button className="boton123" onClick={handleGoBack}>
              Volver
            </button>
        </div>
        <div className="volv">          
            <button className="boton123">
              Añadir
            </button>
        </div>
        
      </div>
    </div>
  );
}

export default SumPerso;

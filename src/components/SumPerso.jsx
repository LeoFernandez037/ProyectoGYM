import React, { useState } from "react";
import WheelPicker from "react-simple-wheel-picker";
import "./SumPerso.css";
import Imagen1 from "../assets/flexion.jpg";

const data = Array.from({ length: 100 }, (_, index) => ({
  id: (index + 1).toString(),
  value: index + 1
}));

function SumPerso() {
  const [numers, setnumers] = useState("");

  const handleGoBack = () => {
    window.history.back();
  };

  const handleOnChange = (data) => {
    // Actualizar el estado 'language' con el valor seleccionado, convertido a número
    setnumers(parseInt(data.value, 10));
  };

  return (
    <div className="card10">
      <div className="lols1">
      <div className="dscns">
        <div className="tittlesexer">
            <div className="titlesexer">Rutinas Personalizadas</div>
          <img className="imagn1" src={Imagen1} alt="Exercise Illustration" />
          <span className="insid-img">Flexiones</span>
          <span className="insid-img2">Ejercicio de Espalda</span>
          <span className="insid-img3">Descripcion</span>
        </div>
        
      </div>
      <div className="wheel-picker-container">
      <span className="you-select">Seleccione cantidad</span>
      <br />
        <WheelPicker
          data={data}
          selectedID={data[0].id}
          height={150}
          width={150}
          idName="numerss"
          titleID="select your favorite numers"
          itemHeight={40}
          onChange={handleOnChange}
          color="#000000"
          fontSize={25}
          backgroundColor="#282828"
          shadowColor="transparent"
          activeColor="#ffffff"
          focusColor="blue"
        />
        <p>
          <span className="you-select">Cantidad seleccionada =</span>
          <span className="numers-selected">{numers}</span>
        </p>
      </div>
      <div className="tarj1">
        <div className="volv">
          <button className="boton123" onClick={handleGoBack}>
            Volver
          </button>
        </div>
        <div className="volv">
          <button className="boton123">Añadir</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default SumPerso;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Imagen1 from "../assets/Logo1.png";

function Register() {
  const handleSubmitLog = async (e) => {
    e.preventDefault();
    let _datos = {
      nombre: "Novat@",
      imagen:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/242.jpg",
      gmail: e.target.email.value,
      contrasena: e.target.password.value,
      rol: "cliente",
      sexo: "Establecer",
      estado: "activo",
      desde: "",
      hasta: "",
      rutinas: "",
      fechanac: "",
    };

    fetch("https://6663ce1a932baf9032a90f5a.mockapi.io/api/User/users", {
      method: "POST",
      body: JSON.stringify(_datos),
      headers: { "Content-type": "application/json;" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <div className="containerR">
      <div className="register-card">
        <div className="ImagenReg">
          <div className="register-header">
            <Link to="/" className="access">
              Acceso
            </Link>
            <Link to="/register" className="signup">
              Inscribirse
            </Link>
            <img className="Logo" src={Imagen1} alt="Logo de del GYM" />
          </div>
          <div className="welcome-message">
            <h1>Bienvenido</h1>
            <p>
              Ingrese su información a continuación, esta será corroborada por
              el administrador del gimnasio
            </p>
          </div>
        </div>
        <form className="register-form" onSubmit={handleSubmitLog}>
          <input type="email" placeholder="Email" name="email" />
          <div className="line"></div>
          <input type="password" placeholder="Contraseña" name="password" />
          <div className="line"></div>
          <input
            type="password"
            placeholder="Contraseña de nuevo"
            name="passwordAgain"
          />
          <button className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

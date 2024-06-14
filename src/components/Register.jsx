import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Imagen1 from "../assets/Logo1.png";

function Register() {
  const handleSubmitLog = (e) => {
    e.preventDefault();
    // const datos = {
    //   nombre: "Novat@",
    //   imagen:
    //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/242.jpg",
    //   gmail: e.target.email.value,
    //   contrasena: e.target.password.value,
    //   rol: "cliente",
    //   sexo: "Establecer",
    //   estado: "activo",
    //   desde: "",
    //   hasta: "",
    //   rutinas: "",
    //   fechanac: "",
    // };
    // console.log(datos);

    // fetch("https://66684a7bf53957909ff76063.mockapi.io/noti/users/", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json;" },
    //   body: JSON.stringify(datos),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((err) => console.log(err));

    const email = e.target.email.value;
    const password = e.target.password.value;
    let emailst = email.toString();
    let passwordst = password.toString();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/9.2.0",
      },
      body:
        '{"nombre":"Novat@","imagen":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg","gmail":' +
        emailst +
        '"contrasena":' +
        passwordst +
        ',"rol":"cliente","sexo":"por definir","estado":"activo","desde":"consulta","hasta":"en caja","rutinas":"","fechanac":"","fecha-nac":""}',
    };

    fetch("https://66684a7bf53957909ff76063.mockapi.io/noti/users/", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Imagen1 from "../assets/Logo1.png";
import { fetchUsers } from "./ejercicios/api";
import Cookies from "universal-cookie";

function Login() {
  let validacion = false;
  const [notis, setUsers] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(notis);
    for (let index = 0; index < notis.length; index++) {
      const element = notis[index];
      if (
        e.target.email.value == element.gmail &&
        e.target.password.value == element.contrasena
      ) {
        console.log("datos correctos!");
        validacion = true;
        setUsuario(element);
      }
    }
    if (validacion == true && usuario.estado == "activo") {
      console.log(usuario);
      cookies.set("contrasena", usuario.contrasena, { path: "/" });
      cookies.set("desde", usuario.desde, { path: "/" });
      cookies.set("estado", usuario.estado, { path: "/" });
      cookies.set("fechanac", usuario.fechanac, { path: "/" });
      cookies.set("gmail", usuario.gmail, { path: "/" });
      cookies.set("hasta", usuario.hasta, { path: "/" });
      cookies.set("id", usuario.id, { path: "/" });
      cookies.set("imagen", usuario.imagen, { path: "/" });
      cookies.set("nombre", usuario.nombre, { path: "/" });
      cookies.set("rol", usuario.rol, { path: "/" });
      cookies.set("rutinas", usuario.rutinas, { path: "/" });
      cookies.set("sexo", usuario.sexo, { path: "/" });
      window.location.replace("/home");
    }
    if (validacion == true && usuario.estado == "inactivo") {
      alert("Verifique su membresia en caja");
    }
  };

  return (
    <>
      <div className="containerL">
        <div className="login-card">
          <div className="ImagenLog">
            <div className="login-header">
              <Link to="/login" className="access">
                Acceso
              </Link>
              <Link to="/register" className="signup">
                Inscribirse
              </Link>
              <img className="Logo" src={Imagen1} alt="Logo de del GYM" />
            </div>
            <div className="Mensaje">
              <h1>Bienvenido de nuevo</h1>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name="email" />
            <div className="line"></div>
            <input type="password" placeholder="Contraseña" name="password" />
            <button className="login-button">Acceso</button>
          </form>
          <br />
        </div>
      </div>
    </>
  );
}

export default Login;

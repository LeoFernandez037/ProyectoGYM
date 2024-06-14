import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Imagen3 from "../assets/Foto.jpg";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1 className="rajdhani-bold">Perfil</h1>
        </div>
        <div className="profile-info">
          <div className="Perfil">
            <img
              className="profile-pic"
              src={cookies.get("imagen")}
              alt="Perfi_1"
            />
          </div>
          <div className="profile-details">
            <p className="titulo">Tipo de usuario:</p>
            <p className="highlight">{cookies.get("rol").toUpperCase()}</p>
            <p className="titulo">Membresía:</p>
            <p className="highlight">{cookies.get("estado").toUpperCase()}</p>
            <p className="titulo">Genero:</p>
            <p className="highlight">{cookies.get("sexo").toUpperCase()}</p>
            <p className="titulo">Fecha Nacimiento:</p>
            <p>{cookies.get("fechanac").toUpperCase()}</p>
            <p className="titulo">Membresia Inicio-Final</p>
            <p>
              {cookies.get("desde")} - {cookies.get("hasta")}
            </p>
          </div>
        </div>
        <div className="profile-name">
          <h1>{cookies.get("nombre")}</h1>
        </div>
        <nav className="profile-nav">
          <ul>
            <li>
              Editar perfil
              <Link to="/ediprofile">
                <span className="flecha">➡</span>
              </Link>
            </li>
            <li>
              Sobre el gimnasio
              <Link to="/sobreG">
                <span className="flecha">➡</span>
              </Link>
            </li>
            <li>
              Calendario personal
              <Link to="/calendario">
                <span className="flecha">➡</span>
              </Link>
            </li>
            <Link to="/">
              <p className="logout">
                <a href="/">Cerrar sesión</a>
              </p>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Profile;

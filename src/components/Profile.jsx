import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Imagen3 from "../assets/Foto.jpg";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1 class="rajdhani-bold">Perfil</h1>
        </div>
        <div className="profile-info">
          <div className="Perfil">
            <img className="profile-pic" src={Imagen3} alt="Perfi_1" />
          </div>
          <div className="profile-details">
            <p className="titulo">Desde</p>
            <p>hace 2 meses</p>
            <p className="titulo">Tipo de usuario:</p>
            <p className="highlight">Cliente Regular</p>
            <p className="titulo">Membresía:</p>
            <p className="highlight">ACTIVO</p>
            <p>16/04/24 - 16/05/24</p>
          </div>
        </div>
        <div className="profile-name">
          <holi>Gabriela Esprella</holi>
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
            <p className="logout">
              <a href="/">Cerrar sesión</a>
            </p>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Profile;

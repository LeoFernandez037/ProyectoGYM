import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditarPerfil.css";
import Imagen12 from "../assets/Foto.jpg";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function EditarPerfil() {
  const [nombre, setNombre] = useState(cookies.get("nombre"));
  const [email, setEmail] = useState(cookies.get("gmail"));
  const [sexo, setSexo] = useState(cookies.get("sexo"));
  const [fechaNacimiento, setFechaNacimiento] = useState(
    cookies.get("fechanac")
  );

  const handleSave = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para guardar los datos
    console.log({ nombre, email, sexo, fechaNacimiento });
  };
  return (
    <div className="editar-perfi">
      <div className="per-card">
        <div className="edit-header">
          <Link to="/profile">
            <span className="flech">⬅</span>
          </Link>
          <h1 className="tituloPer"> Editar Perfil</h1>
        </div>
        <div className="profile-pic-container">
          <img
            className="profile-pi"
            src={cookies.get("imagen")}
            alt="Perfi_2"
          />
          <button className="edit-pic-button">📷</button>
        </div>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="line"></div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="line"></div>
          <div className="form-group">
            <label>Sexo</label>
            <input
              type="text"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            />
          </div>
          <div className="line"></div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
          <button type="submit" className="save-button">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;

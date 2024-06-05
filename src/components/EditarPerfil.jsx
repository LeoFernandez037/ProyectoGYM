import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditarPerfil.css';
import Imagen12 from "../assets/Foto.jpg";

function EditarPerfil() {
    const [nombre, setNombre] = useState('Gabriela Esprella');
    const [email, setEmail] = useState('Gaby145@mail.com');
    const [sexo, setSexo] = useState('Mujer');
    const [fechaNacimiento, setFechaNacimiento] = useState('1998-04-24');

    const handleSave = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos
        console.log({ nombre, email, sexo, fechaNacimiento });
    };
    return (
        <div className="editar-perfi">
            <div className="per-card">
            <div className="edit-header">
                    <Link to="/profile" >
                        <span className="flech">⬅</span>
                    </Link>
                    <h1 className="tituloPer"> Editar Perfil</h1>
                </div>
                <div className="profile-pic-container">
                    <img className="profile-pi" src={Imagen12} alt="Perfi_2" />
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
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sexo</label>
                        <input
                            type="text"
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <input
                            type="date"
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="save-button">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default EditarPerfil
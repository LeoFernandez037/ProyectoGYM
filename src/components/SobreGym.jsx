import React from 'react'
import { Link } from 'react-router-dom';
import './SobreGym.css';
import ImagenUbi from "../assets/ubi.png";
import ImagenFace from "../assets/Face.png";
import ImagenMens from "../assets/Mens.png";
import ImagenTel from "../assets/Tel.png";

function SobreGym() {
    return (
        <div className="gimnasio-container">
            <div className="ubi-card">
                <h1>Sobre el Gimnasio</h1>
                <h3>Sobre nosotros</h3>
                <p>Nuestra ubicación</p>
                <div className="mapa">
                    <img className="mapa-imagen" src={ImagenUbi} alt="Mapa de ubicación" />
                </div>
                <div className="contacto">
                    <h3>Contactanos</h3>
                    <p><img className="Icono" src={ImagenFace} alt="Faceb" /><a href="https://www.facebook.com/profile.php?id=100062974552478&mibextid=qi2Omg&rdid=LaGHVuJGoWjwKNvP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FrbBL1mczgj4LnzHm%2F%3Fmibextid%3Dqi2Omg" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p><img className="Icono" src={ImagenTel} alt="Telefono" />Tel: 78764484</p>
                    <p><img className="Icono" src={ImagenMens} alt="Email" />Email: <a href="fitclub.lapaz@gmail.com">fitclub.lapaz@gmail.com</a></p>
                </div>
                <Link to="/profile">
                    <button className="volver-btn">Acceso</button>
                </Link>
            </div>
        </div>
    )
}

export default SobreGym
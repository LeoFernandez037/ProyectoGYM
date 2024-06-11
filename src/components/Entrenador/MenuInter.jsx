import React from "react";
import { Link } from "react-router-dom";
import "./MenuInter.css";

function MenuInter() {
    return (
        <div className="containerMenu">
            <div className="menuIn-card">
                <h1 class="rajdhani-bold">Menu de interacciones</h1>
                <div className="menuIn-Tarjeta">
                    <div className="menuIn-buttonContainer">
                        <Link to="/aprend">
                            <button className="menuIn-button">Aprendices</button>
                        </Link>
                    </div>
                    <div className="menuIn-buttonContainer">
                        <Link to="/crono">
                            <button className="menuIn-button">Cronograma</button>
                        </Link>
                    </div>
                    <div className="menuIn-buttonContainer">
                        <Link to="/rutina">
                            <button className="menuIn-button">Membresias</button>
                        </Link>
                    </div>
                    <div className="menuIn-buttonContainer">
                        <Link to="/rutina">
                            <button className="menuIn-button">Calendario</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuInter
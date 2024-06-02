import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Informacion from '../components/Informacion';
// import Notificaion from '../components/Notificaion';
import BottomNav from "../components/BottomNav.jsx";
import "./Navegacion.css";
import Historial from '../components/Historial';

function Navegacion() {
    return (
        <div className="navContainer">
            <div className="compContainer">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/historial" element={<Historial />} />
                    {/*<Route path="/notificacion" element={<Notificaion/>} />
                    <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} /> */}
                </Routes>
                <BottomNav />
            </div>
        </div>
    )
}

export default Navegacion
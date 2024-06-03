import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Informacion from '../components/Informacion';
import Notificacion from '../components/Notificacion';
import BottomNav from "../components/BottomNav.jsx";
import "./Navegacion.css";
import Historial from '../components/Historial';
import Profile from '../components/Profile.jsx';
import EditarPerfil from '../components/EditarPerfil.jsx';

function Navegacion() {
    return (
        <div className="navContainer">
            <div className="compContainer">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/notificacion" element={<Notificacion/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/ediprofile" element={<EditarPerfil/>} />
                    <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} /> 
                </Routes>
                <BottomNav />
            </div>
        </div>
    )
}

export default Navegacion
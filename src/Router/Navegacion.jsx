import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Informacion from '../components/Informacion.jsx';
import Ejercicio from '../components/Ejercicio.jsx';
import Ejercicio2 from '../components/Ejercicio2.jsx';
import Ejercicio3 from '../components/Ejercicio3.jsx';
import Notificacion from '../components/Notificacion.jsx';
import BottomNav from "../components/BottomNav.jsx";
import "./Navegacion.css";
import Historial from '../components/Historial.jsx';
import Profile from '../components/Profile.jsx';
import EditarPerfil from '../components/EditarPerfil.jsx';
function Navegacion() {
    return (
        <div className="navContainer">
            <div className="compContainer">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/ejercicio" element={<Ejercicio />} />
                    <Route path="/ejercicio2" element={<Ejercicio2 />} />
                    <Route path="/ejercicio3" element={<Ejercicio3 />} />
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
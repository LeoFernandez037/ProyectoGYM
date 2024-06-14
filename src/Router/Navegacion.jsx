import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Informacion from "../components/Informacion";
import Notificacion from "../components/Notificacion";
import BottomNav from "../components/BottomNav.jsx";
import "./Navegacion.css";
import Historial from "../components/Historial";
import Profile from "../components/Profile.jsx";
import EditarPerfil from "../components/EditarPerfil.jsx";
import SobreGym from "../components/SobreGym.jsx";
import Calendario from "../components/Calendario.jsx";
import SocialPage from "../components/TarjetaSocial/SocialPage";
import HomePage from "../components/ejercicios/HomePage";
import ExercisePage from "../components/InfoTar/ExercisePage";
import ExerciseDetailPage from "../components/ejercicios/ExerciseDetailPage.jsx";
import PersonalizedRoutinesPage from "../components/ejercicios/PersonalizedRoutinesPage.jsx";
import Nutricion from "../components/Chatbot/Nutricion.jsx";
function Navegacion() {
  return (
    <div className="navContainer">
      <div className="compContainer">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/notificacion" element={<Notificacion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ediprofile" element={<EditarPerfil />} />
          <Route path="/sobreG" element={<SobreGym />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/rutina" element={<HomePage />} />
          <Route path="/ejercicio" element={<ExercisePage />} />
          <Route path="/exercise-detail" element={<ExerciseDetailPage />} />
          <Route path="/personalized-routines" element={<PersonalizedRoutinesPage />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
        </Routes>
        <BottomNav />
      </div>
    </div>
  );
}

export default Navegacion;

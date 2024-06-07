import "./App.css";
import Navegacion from "./Router/Navegacion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="componentsContainer">
          <BrowserRouter>
            <Routes>
              <Route path="/ProyectoGYM" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Navegacion />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

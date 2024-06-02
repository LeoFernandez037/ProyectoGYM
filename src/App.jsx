import react, { useState } from "react";
import BottomNav from "./components/BottomNav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="componentsContainer"></div>
        <BottomNav />
      </div>
    </>
  );
}

export default App;

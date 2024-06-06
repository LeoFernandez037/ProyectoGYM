import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import BottomNav from "./components/BottomNav.jsx";
import ExercisePage from "./components/InfoTar/ExercisePage.jsx"; 
import ExerciseDetail from "./components/Comoharan/ExerciseDetail.jsx";
import "./App.css";
import HomePage from "./components/ejercicios/HomePage.jsx";
import SocialPage from './components/TarjetaSocial/SocialPage.jsx';
function App() {
  return (
    <>
     
        <div className="componentsContainer">
          <ExercisePage />
   
        </div>
        <BottomNav />
     
      
        <div className="componentsContainer">
          <ExerciseDetail />
        </div>
        <BottomNav />
      
        <div className="componentsContainer">
          <HomePage />
        </div>
        <BottomNav />
        <div className="componentsContainer">
          <SocialPage />
        </div>
        <BottomNav />
    </>
  );
}

export default App;

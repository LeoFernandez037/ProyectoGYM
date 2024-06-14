import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendario.css';
import ImagenCal1 from "../assets/ImageCal1.png";
import ImagenCal2 from "../assets/ImageCal2.png";

function Calendario() {
  const navItems = [
    { day: "M", date: 16, isSelected: false },
    { day: "T", date: 17, isSelected: false },
    { day: "W", date: 18, isSelected: true },
    { day: "T", date: 19, isSelected: false },
    { day: "F", date: 20, isSelected: false },
    { day: "S", date: 21, isSelected: false },
    { day: "S", date: 22, isSelected: false },
  ];

  const activities = [
    {
      imgSrc: ImagenCal1,
      altText: "Ejercicio de gluteos",
      title: "Ejercicio de gluteos",
      duration: "30:43",
    },
    {
      imgSrc: ImagenCal2,
      altText: "Ejercicio de pecho",
      title: "Ejercicio de pecho",
      duration: "24:42",
    },
  ];

  return (
    <div className="container">
      <header className="title">Calendario</header>
      <section className="calendar">
        <div className="calendar-header">
          <img src="" />
          <div className="calendar-title">October 2021</div>
          <img src="" />
        </div>
        <nav className="calendar-nav">
          {navItems.map(({ day, date, isSelected }, index) => (
            <div key={index}>
              <div className={`nav-item ${isSelected ? 'nav-item-selected' : 'nav-item-default'}`}>
                <span className="nav-day">{day}</span>
                <span className="nav-date">{date}</span>
              </div>
            </div>
          ))}
        </nav>
      </section>

      {activities.map(({ imgSrc, altText, title, duration }, index) => (
        <article key={index} className="activity-card">
          <img src={imgSrc} alt={altText} className="activity-img" />
          <div className="activity-info">
            <h2 className="activity-title">{title}</h2>
            <div className="activity-duration">
              <span className="duration-label">Duracion</span>
              <span className="duration-value">{duration}</span>
            </div>
          </div>
        </article>
      ))}

      <button className="back-button"><Link to="/profile" ><span>Volver</span></Link></button>
      </div>
  );
}

export default Calendario;
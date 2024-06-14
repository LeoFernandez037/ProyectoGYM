import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendario2.css';
import btnDer from '../assets/btnDer.png';
import btnIzq from '../assets/btnIzq.png';
import estats from '../assets/estats.png';
import ImageCal1 from '../assets/ImageCal1.png';

function WeekDay({ day, date, isActive }) {
  return (
    <div className="calendario2-nav-item">
      <div className={`calendario2-weekday-content ${isActive ? "active" : ""}`}>
        <div className="calendario2-nav-day">{day}</div>
        <div className="calendario2-nav-date">{date}</div>
      </div>
    </div>
  );
}

function Calendario2() {
  return (
    <div className="calendario2-container">
      <div className="calendario2-calendar">
        <div className="calendario2-calendar-header">
          <img loading="lazy" src={btnIzq} className="calendario2-header-icon" alt="Icon 1" />
          <div className="calendario2-calendar-title">October 2021</div>
          <img loading="lazy" src={btnDer} className="calendario2-header-icon" alt="Icon 2" />
        </div>
        <div className="calendario2-calendar-nav">
          <WeekDay day="M" date="16" />
          <WeekDay day="T" date="17" />
          <WeekDay day="W" date="18" isActive />
          <WeekDay day="T" date="19" />
          <WeekDay day="F" date="20" />
          <WeekDay day="S" date="21" />
          <WeekDay day="S" date="22" />
        </div>
      </div>
      <div className="calendario2-activity-card">
        <img loading="lazy" src={ImageCal1} className="calendario2-activity-img" alt="Activity Icon" />
        <div className="calendario2-activity-info">
          <div className="calendario2-activity-title">Entrenamiento de gluteos</div>
          <div className="calendario2-activity-duration">
            <div className="calendario2-duration-label">Duración:</div>
            <div className="calendario2-duration-value">10:00</div>
          </div>
        </div>
      </div>
      <img loading="lazy" src={estats} className="calendario2-estats-img" alt="Estats Icon" />
      <button className="calendario2-back-button">Entrenar ahora</button>
      <p></p>
      <button className="calendario2-back-button">Volver</button>
    </div>
  );
}

export default Calendario2;

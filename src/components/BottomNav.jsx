import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";
import Imagen99 from "../assets/profile.jpg";
import homeIcon from "../assets/Home.png";
import statsIcon from "../assets/stads.png";
import bellIcon from "../assets/bell.png";
import usersIcon from "../assets/Vector.png";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/social">
        <img src={usersIcon} alt="Users" className="icon" />
      </Link>
      <Link to="/home">
        <img src={homeIcon} alt="Home" className="icon" />
      </Link>
      <Link to="/informacion">
        <img src={statsIcon} alt="Stats" className="icon" />
      </Link>
      <div className="bell-icon-wrapper">
        <Link to="/notificacion">
          <img src={bellIcon} alt="Bell" className="icon" />
        </Link>
        <span className="notification-dot"></span>
      </div>
      <Link to="/profile">
        <img src={Imagen99} alt="Profile" className="profile" />
      </Link>
    </div>
  );
};

export default BottomNav;

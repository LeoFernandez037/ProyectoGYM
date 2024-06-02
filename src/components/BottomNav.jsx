import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";
import profileImage from "../assets/profile.jpg";
import homeIcon from "../assets/Home.png";
import statsIcon from "../assets/stads.png";
import bellIcon from "../assets/bell.png";
import usersIcon from "../assets/Vector.png";

class BottomNav extends React.Component {
  render() {
    return (
      <div className="bottom-nav">
        <Link to="/users">
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
        <Link to="/perfil">
          <img src={profileImage} alt="Profile" className="profile-pic" />
        </Link>
      </div>
    );
  }
}

export default BottomNav;
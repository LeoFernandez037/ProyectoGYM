import React from "react";
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
        <img src={usersIcon} alt="Users" className="icon" />
        <img src={homeIcon} alt="Home" className="icon" />
        <img src={statsIcon} alt="Stats" className="icon" />
        <div className="bell-icon-wrapper">
          <img src={bellIcon} alt="Bell" className="icon" />
          <span className="notification-dot"></span>
        </div>
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
    );
  }
}

export default BottomNav;

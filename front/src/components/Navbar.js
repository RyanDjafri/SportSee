import React from "react";
import Logo from "../assets/sportsee.svg";
import LogoTitle from "../assets/sportseeTitle.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="sportsee-logo" className="icon" />
        <img src={LogoTitle} alt="sportsee-logo-title" className="icon-title" />
      </div>
      <div className="list">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#">Accueil</a>
          </li>
          <li className="nav-list-item">
            <a href="#">Profil</a>
          </li>
          <li className="nav-list-item">
            <a href="#">Réglage</a>
          </li>
          <li className="nav-list-item">
            <a href="#">Communauté</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Logo from "../../assets/LOGO.png"
import "./Header.css";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className="head">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa Header" className="head_img" />
      </NavLink>
      <nav className='head_navigation'>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
          to="/a_propos"
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}


export default Header;
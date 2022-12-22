import React from 'react';
import Logo from "../../assets/LOGO.png"
import "./Header.css";
import { NavLink } from 'react-router-dom';


function Header() {
    return (
      <nav className="nav">
        <NavLink to="/">
          <img src={Logo} alt="Logo Kasa Header" className="nav_img" />
        </NavLink>
        <div className='header_navigation'>
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
        </div>
      </nav>
    );
  }
  

export default Header;
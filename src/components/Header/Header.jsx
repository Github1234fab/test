import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png"
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <div className = 'header'>
            <img className = 'Logo' src={Logo} alt="logo de Kasa" />
            <NavLink className = 'header_menu'>
                <Link to = "/" className='header_liens'>Accueil</Link>
                <Link to= "/a_propos" className='header_liens'>À propos</Link>
            </NavLink>
            </div>
      
    );
};

export default Header;
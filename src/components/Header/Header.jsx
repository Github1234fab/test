import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png"
import "./Header.css";

function Header () {
    return (
        <div className = 'header'>
            <img className = 'Logo' src={Logo} alt="logo de Kasa" />
            <div className='header_menu'>
                <Link to = "/" className='header_liens'>Accueil</Link>
                <Link to= "/a_propos" className='header_liens'>À propos</Link>
            </div>
        </div>

    );
};

export default Header;
import React from 'react';
import Logo from "../../assets/LOGO_blanc.png"
import "./Footer.css"

const Footer = () => {
    const actualYear = new Date().getFullYear();
    return (
        <div>
            <div className='footer'>
                <img className='footer_Logo' src={Logo} alt="Logo de Kasa" />
                <div className='footer_notice'>&copy; {actualYear} Kasa. All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;
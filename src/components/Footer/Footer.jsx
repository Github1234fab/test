import React from 'react';
import Logo from "../../assets/LOGO_blanc.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                FOOTEr
                <img className='footer_Logo' src={Logo} alt="Logo de Kasa" />
                <div className='footer_notice'>© 2020 Kasa. All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;
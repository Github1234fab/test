import React from 'react';
import MontagneAbout from "../assets/apropos_media.jpg"

const Banner3 = () => {
    return (
        <div className = "banner3">
            <img className = "banner_img" src = {MontagneAbout} alt="Panorama sommets montagne" />
        </div>
    );
};

export default Banner3;
import React from 'react';
import Montagne from "../assets/apropos.jpg"
import panoramaMontagne from "../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg"

const Banner2 = () => {
    return (
        <div className = "banner2">
            <img className = "banner_img" src = {Montagne} alt="Panorama sommets montagne" />
            <img className = "banner_imgPanorama" src = {panoramaMontagne} alt="Panorama montagne" />
        </div>
    );
};

export default Banner2;
import React from 'react';
import Ocean from '../assets/IMG_banner.jpg';

const Banner = () => {
    return (
        <div className = "banner">
            <img className = "banner_img" src = {Ocean} alt="Côte océan" />
        </div>
    );
};

export default Banner;
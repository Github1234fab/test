import React from 'react';
import Ocean from '../assets/IMG_banner.jpg';

const Banner = () => {
    return (
        <div className="banner">
                <img className="banner_img" src={Ocean} alt="Côte océan" />
                <h1 className='banner_txt' >Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
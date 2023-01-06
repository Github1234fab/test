import React from 'react';
import "./Star.css"

const Star = ({ actived = false }) => {
    return (
        <span className={`${actived ? "starRed starSize" : "starGrey starSize"}`}>
            {"★"}
        </span>
    );
};

export default Star;

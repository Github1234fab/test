import React from 'react';
import "./Tag.css";

const Tag = ({ tag }) => {
    return (
        <div className='tag'>
            <p className='tag_txt'>{tag}</p>
        </div>
    );
};

export default Tag;
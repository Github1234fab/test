import React from 'react';
import "./Tag.css";

const Tag = ({ tag }) => {
    return (
        <div className='tag_container'>
            <div className='tag'>
                <p className='tag_txt'>{tag}</p>
            </div>
        </div>
    );
};

export default Tag;
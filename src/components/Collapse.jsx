import React, {useState} from 'react';
import arrowCollapse from "../assets/arrow_collapse.svg";
import "./Collapse.css";



const Collapse = (title, description) => {
    const [open, setOpen] = useState(false);
    const arrowClick = () =>{
        setOpen(open===true?false:true)
    }
    return (
        <div className='collapse'  id = {'collapse-${title'}>
            <div className='collapse_header'>
                <div className='collapse_title'>{title}</div>
                <span className={`collapse_arrow ${open}`} onclick={arrowClick}>
                    <img src={arrowCollapse} alt="Ouvrir ou fermer le contenu" />
                </span>
            </div> 
            <div>
                {
                    open && <div className='collapse_description'>{description}</div>
                }
            </div>
            
        </div>
    );
};

export default Collapse;
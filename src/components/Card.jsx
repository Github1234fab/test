import React from 'react';
import Data from "../data/data.json"
import { Link } from "react-router-dom";


function Card() {
    return (
        <div className='cards'>
            {/* //fabrication des cartes itération */}
            {
                Data.map((appartement) => {
                    // sans destructuring
                    // const cover = appartement.cover;
                    // const id = appartement.id;
                    // const title = appartement.title;

                    //destructuring:
                    const { cover, title, id } = appartement;
                    return (
                        <div className='card' key={id} >
                            <div className='card_visuel'>
                                <Link to={"logements/" + id} className="card_link">
                                    {/* //image */}
                                    {/* title */}
                                    {/* overlay qui englobe l'image et le titre */}
                                    {/* <div className='card_overlay'> */}
                                    <img className='card_cover' src={cover} alt={title} />
                                    {/* </div> */}
                                    {/* <div className='card_title'> */}
                                    <h2 className="card_title">{title}</h2>
                                    {/* </div> */}
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
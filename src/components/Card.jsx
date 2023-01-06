import React from 'react';
import Data from "../data/data.json"
import { Link } from "react-router-dom";


function Card() {
    return (
        <section className='cards'>
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
                        <article className='card' key={id} >
                            <div className='card_visuel'>
                                <Link to={"logements/" + id} className="card_link">
                                    <img className='card_cover' src={cover} alt={title} />
                                    <h2 className="card_title">{title}</h2>
                                </Link>
                            </div>
                        </article>
                    )
                })
            }
        </section>
    );
};

export default Card;
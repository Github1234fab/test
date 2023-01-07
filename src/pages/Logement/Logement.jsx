import React from 'react';
// import Tag from '../../components/Tag';
import "./Logement.css";
import Carrousel from '../../components/Carrousel';
import { useParams, Navigate } from 'react-router-dom';
import DataLogements from "../../data/data.json";
import Collapse from '../../components/Collapse';
import Tag from '../../components/Tag/Tag';
import Contact from '../../components/Contact/Contact';
import Star from '../../components/Stars/Star';



function Logement() {
    // je récupère l'id du logement concerné que je vais comparer avec l'id de la bdd. 
    // Si je le trouve je le récupère.

    const { id } = useParams();
    const logement = DataLogements.find((logement) => logement.id === id);
    // console.log({logement});
    if (!logement) { return <Navigate to="/404" /> };

    const { pictures, description, equipments, title, location, tags, host, rating } = logement;
    const listeEquipments = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })
    // Je construis un tableau "stars" qui va de 1 à 5, sur lequel je vais itérer pour fabriquer les étoiles 
    // à l'aide du composant Star. Chaque chiffre du tableau sera comparé au "rating". Si le chiffre
    // est inférieur ou égal au "rating" alors, actived est égal à true.
    const stars = [1, 2, 3, 4, 5];
    const listStars = stars.map((x) => (
        <Star key={x} actived={x <= Number(rating)} />
    ));

    return (
        <div className = "Logement_page">
            <div className='container_logement'>
                <Carrousel images={pictures} />
                <div className='logement_informations'>
                    <div className='logement_infoGeneral'>
                        <h1 className='logement_title'>{title}</h1>
                        <p className='logement_location'>{location}</p>
                        <div className='logement_tag'>
                            {
                                tags.map((tag, index) => (<Tag key={index} tag={tag} />))
                            }
                        </div>
                    </div>
                    <div className='logement_contact'>
                        <Contact host={host} />
                        <div className='logement_stars'>{listStars}</div>
                    </div>
                </div>
                <div className="logement_equipments">
                    <Collapse
                        className="description"
                        titre="Description"
                        description={description}
                    />
                    <Collapse
                        className="equipment"
                        titre="Équipements"
                        description={listeEquipments}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logement;
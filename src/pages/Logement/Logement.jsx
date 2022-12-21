import React from 'react';
// import Tag from '../../components/Tag';
import "./Logement.css";
import Carrousel from '../../components/Carrousel';
import { useParams } from 'react-router-dom';
import DataLogements from "../../data/data.json";
import Collapse from '../../components/Collapse';
import Tag from '../../components/Tag/Tag';
import Contact from '../../components/Contact/Contact';


function Logement() {
    // je récupère l'id du logement concerné que je vais comparer avec l'id de la bdd. 
    // Si je le trouve je le récupère.

    const { id } = useParams();
    const logement = DataLogements.find((logement) => logement.id === id);
    const { pictures, description, equipments, title, location, tags, host } = logement;
    const listeEquipments = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return (
        <>
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
                        <Contact host={host}/>
                        <div className='logement_stars'></div>
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
        </>
    );
};

export default Logement;
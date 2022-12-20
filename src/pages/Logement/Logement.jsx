import React from 'react';
// import Tag from '../../components/Tag';
import "./Logement.css";
import Carrousel from '../../components/Carrousel';
import { useParams } from 'react-router-dom';
import DataLogements from "../../data/data.json";
import Collapse from '../../components/Collapse';


function Logement() {
    // je récupère l'id du logement concerné que je vais comparer avec l'id de la bdd. 
    // Si je le trouve je le récupère.

    const { id } = useParams();
    const logement = DataLogements.find((logement) => logement.id === id);
    const { pictures, description, equipments } = logement;
    const listeEquipments = equipments.map((equipment, index)=>{
        return <li key={index}>{equipment}</li>
    })

    return (
        <>
            <div className='container_logement'>
                <Carrousel images={pictures} />
                <div className="product_equipments">
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
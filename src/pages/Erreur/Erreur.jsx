import React from 'react';
import "./Erreur.css";
import { Link } from 'react-router-dom';

const Erreur = () => {
    return (
        <div>
          <div className='Erreur_visuels'>
          <div className = "Erreur_404">404</div>
          <div className = "Erreur_oups">Oups! la page que vous demandez n'existe pas.</div>
        <Link to={"./"} className = "Erreur_retour">Retournez sur la page d'accueil</Link> 
        </div>
        </div>      
    );
};

export default Erreur;
import React from 'react';
import { useState } from 'react';
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import "./Carrousel.css";


const Carrousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const arrayLength = images.length;
    const nextImage = () =>{
        setCurrentImage(currentImage===arrayLength-1?0:currentImage+1)
    }
    const prevImage = () =>{
        setCurrentImage(currentImage===0?arrayLength-1:currentImage-1)
    }

    // currentImage, c'est là ou je me trouve (index).
    // si onCLick=prevImage, on récupère la position actuelle dans le carrousel. 
    // Si on est positionné sur la première image, on se retrouve sur la dernière image.
    // sinon on décrémente d'un.

    // si on click=nextImage, on récupère la position actuelle dans le carrousel.
    // Si on est positionné sur la dernirèe image, on se retrouvera sur la première image.
    // sinon, on incrémente de un.

    return (
        <div>
            {images.map(
        (image, index) =>
          currentImage === index && (
            <div key={image} className="carrousel_image">
              <span className="gallery_count">
                {index + 1}/{arrayLength}
              </span>
              <img src={image} alt="appartement" />
              {arrayLength > 1 ? (
                <>
                  <div className="carrousel_arrowLeft" onClick={prevImage}>
                    <img src={arrowLeft} alt="arrow preview" />
                  </div>
                  <div className="carrousel_arrowRight" onClick={nextImage}>
                    <img src={arrowRight} alt="arrow next" />
                  </div>
                </>
              ) : null}
            </div>
          )
      )}

        </div>
    );
};

export default Carrousel;

import React from 'react';
import "./Contact.css";

const Contact = ({ host }) => {
    const nameSplit = host.name.split(' ');
    console.log(nameSplit);
    const [firstName, lastName] = nameSplit;
    const { picture } = host;
    return (
        <div className='contact'>
            <div className='contact_identity'>
                <p className='contact_firstName'>{firstName}</p>
                <p className='contact_lastName'>{lastName}</p>
            </div>
            <img src={picture} alt="Profil" className="contact_profilPicture" />
        </div>
    );
};

export default Contact;
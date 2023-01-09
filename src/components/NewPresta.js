import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewPresta = () => {
    const navigate = useNavigate();

    return (
        <div className='new-presta' onClick={()=> navigate('/formulaire')}>
            Enregistrer une nouvelle prestation
        </div>
    )
}

export default NewPresta
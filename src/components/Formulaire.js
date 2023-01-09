import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Formulaire = () => {
   

    const [presta, setPresta] = useState({
        clientName: "",
        date: "",
        observations: "pas d'observations",
        tech: "",
    })

    const addPresta = () => {
     const newPresta = {
        clientName: "",
        date: "",
        observations: "pas d'observations",
        tech: "",
     }

     setPresta(
        [...presta, newPresta]
        )
    };

    // const NewPresta = (e) => {
    //     const copyPresta = { ...presta };
    //     // copyPresta = e.target.value;
    //     copyPresta.clientName = e.target.client.value;
    //     copyPresta.date=e.target.date.value;
    //     copyPresta.observations= e.target.comments.value;
    //     copyPresta.tech=e.target.tech.value;

    //     setPresta(
    //         {
    //             ...presta, copyPresta
    //         }
    //     )
    // }

    return (
        <div className="App">
            <Header 
            />

            <div className="form-group">
                <form>
                    <label> Nom du client :
                        <input
                            type="text"
                            className="client"
                            onChange={(e) => setPresta({...presta, clientName :e.target.value})}
                        />
                    </label>

                    <label> Date :
                        <input
                            type="date"
                            className="date"
                            onChange={(e) => setPresta({...presta, date :e.target.value})}
                        />
                    </label>
                    <label> Observations :
                        <textarea
                            type="text"
                            className="comments"
                            onChange={(e) => setPresta({...presta, observations :e.target.value})}
                        />
                    </label>
                    <label> Nom du technicien :
                        <input
                            type="text"
                            className="tech"
                            onChange={(e) => setPresta({...presta, tech :e.target.value})}
                        />
                    </label>

                    <button

                        className="btn"
                        // onSubmit={(e) => NewPresta(e)}
                        onClick={() => addPresta()}
                    >
                        Enregistrer
                    </button>
                </form>

            </div>

            <Footer />
        </div>
    )
}

export default Formulaire
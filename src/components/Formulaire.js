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

    const NewPresta = (e) => {
        const copyPresta = { ...presta };
        // copyPresta = e.target.value;
        copyPresta.clientName = e.target.client.value;
        copyPresta.date=e.target.date.value;
        copyPresta.observations= e.target.comments.value;
        copyPresta.tech=e.target.tech.value;

        setPresta(
            {
                ...presta, copyPresta
            }
        )
    }

    return (
        <div className="App">
            <Header />

            <div className="form-group">
                <form>
                    <label> Nom du client :
                        <input
                            type="text"
                            className="client"
                        />
                    </label>

                    <label> Date :
                        <input
                            type="date"
                            className="date"
                        />
                    </label>
                    <label> Observations :
                        <textarea
                            type="text"
                            className="comments"
                        />
                    </label>
                    <label> Nom du technicien :
                        <input
                            type="text"
                            className="tech"
                        />
                    </label>

                    <button

                        className="btn"
                        // onSubmit={(e) => NewPresta(e)}
                        onClick={(e) => NewPresta(e)}
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
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

    // const addPresta = () => {
    //  const newPresta = {
    //     clientName: "",
    //     date: "",
    //     observations: "pas d'observations",
    //     tech: "",
    //  }

    //  setPresta(
    //     [...presta, newPresta]
    //     )
    // };

    const renderPresta = () => {
        return (
            <div>
                <ul>
                    <li>
                        {presta.clientName}
                    </li>
                    <li>
                        {presta.date}
                    </li>
                    <li>
                        {presta.observations}
                    </li>
                    <li>
                        {presta.tech}
                    </li>
                </ul>
            </div>
        )
    }

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
                            onChange={(e) => setPresta({ ...presta, clientName: e.target.value })}
                        />
                    </label>

                    <label> Date :
                        <input
                            type="date"
                            className="date"
                            onChange={(e) => setPresta({ ...presta, date: e.target.value })}
                        />
                    </label>
                    <label> Observations :
                        <textarea
                            type="text"
                            className="comments"
                            onChange={(e) => setPresta({ ...presta, observations: e.target.value })}
                        />
                    </label>
                    <label> Nom du technicien :
                        <input
                            type="text"
                            className="tech"
                            onChange={(e) => setPresta({ ...presta, tech: e.target.value })}
                        />
                    </label>

                    <button
                        className="btn"
                    // onClick={() => renderPresta()}
                    >
                        Enregistrer
                    </button>
                </form>
            </div>

            <div className='recap'>
                <h1>Recap</h1>
                {renderPresta()}
            </div>


            <Footer />
        </div>
    )
}

export default Formulaire
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Formulaire = () => {
    return (
        <div className="App">
            <Header />

            <div className="form-group">
                <form>
                    <label> Nom du client :
                        <input
                            type="text"
                            className="client"
                        // onChange={(e) => setText(e.target.value)}
                        // value={text}
                        />
                    </label>

                    <label> Date :
                        <input
                            type="date"
                            className="date"
                        // onChange={(e) => setText(e.target.value)}
                        // value={text}
                        />
                    </label>
                    <label> Observations :
                        <textarea
                            type="text"
                            className="comments"
                        // onChange={(e) => setText(e.target.value)}
                        // value={text}
                        />
                    </label>
                    <label> Nom du technicien :
                        <input
                            type="text"
                            className="tech"
                        // onChange={(e) => setText(e.target.value)}
                        // value={text}
                        />
                    </label>

                    <button

                        className="btn"
                    // action={() => addTodo()}
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
import React from 'react'
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Formulaire from './components/Formulaire';


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>}/>
                <Route exact path='/formulaire' element={<Formulaire/>}/>
            </Routes>

        </Router>
    )
}



export default Root
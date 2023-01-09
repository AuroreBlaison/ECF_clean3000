import React from 'react'
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>}/>
            </Routes>

        </Router>
    )
}



export default Root
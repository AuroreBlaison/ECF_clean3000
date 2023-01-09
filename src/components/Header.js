import React from 'react'
import logo from '../img/logo-clean3000-transparent.png'
import { useNavigate } from 'react-router-dom';

const Header =  ({ isHome = false }) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo clean3000" />
            {!isHome ?  <div className ="go-home" onClick={() => goToHome()}> Retour</div> :""}
        </div>
    )
}

export default Header
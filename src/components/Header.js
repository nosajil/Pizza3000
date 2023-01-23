import React from 'react'
import { useNavigate } from 'react-router-dom'

<<<<<<< HEAD
export const Header = ({isHome = false}) => {
    const navigate = useNavigate();

    return (
        <header className="App-header">
            { !isHome ? <i id='left-arrow' onClick={() => navigate("/")} className="fa-solid fa-arrow-left-long"></i> : '' }
            <div className="title-wrapper">
                <i className="fa-solid fa-pizza-slice"></i>
                <h1 className="App-name">Pizza 3000</h1>
            </div>
=======

export const Header = () => {

    const navigate = useNavigate()
    
    return (
        <header className="App-header">
            <div className='icon-back' onClick={() => navigate("/")}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="App-logo" alt="logo" />
            <span className="App-name">Pizza 3000</span>
>>>>>>> c8c75b3d761a9bf008d4e2f34de840e71f14a777
        </header>

    )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = ({isHome = false}) => {
    const navigate = useNavigate();

    return (
        <header className="App-header">
            { !isHome ? <i id='left-arrow' onClick={() => navigate("/")} className="fa-solid fa-arrow-left-long"></i> : '' }
            <div className="title-wrapper">
                <i className="fa-solid fa-pizza-slice"></i>
                <h1 className="App-name">Pizza 3000</h1>
            </div>
        </header>

    )
}

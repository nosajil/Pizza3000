import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Header = () => {

    const navigate = useNavigate()
    
    return (
        <header className="App-header">
            <div className='icon-back' onClick={() => navigate("/")}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="App-logo" alt="logo" />
            <span className="App-name">Pizza 3000</span>
        </header>
    )
}

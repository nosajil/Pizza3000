import React from 'react'

export const Header = () => {
    return (
        <header className="App-header">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} className="App-logo" alt="logo" />
            <span className="App-name">Pizza 3000</span>
        </header>
    )
}

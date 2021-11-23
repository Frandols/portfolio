import React from 'react'

import './Header.css'

export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <header
            className="site-header">
            <div
                className="container">
                <div
                    className="header-content">
                    <h2
                        className="header-title">
                        Francisco De Los Santos
                    </h2>
                    <button
                        className={`header-menu-btn ${menuOpen ? 'btn-active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <div
                            className="bar">
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}
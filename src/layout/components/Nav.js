import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
        <nav
            className="site-nav"
            style={
                menuOpen ?
                {
                    height: 164
                }
                :
                null
            }>
            <div
                className="container">
                <ul
                    className="nav-list">
                    <li
                        className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li
                        className="nav-item">
                        <Link
                            className="nav-link"
                            to="/portfolio"
                            onClick={() => setMenuOpen(false)}>
                            Portfolio
                        </Link>
                    </li>
                    <li
                        className="nav-item">
                        <Link
                            className="nav-link"
                            to="/contact"
                            onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
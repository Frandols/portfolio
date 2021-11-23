import React, { useState, useEffect } from 'react'

import './Layout.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        window.onresize = () => {
            setMenuOpen(false)
        }
    }, [])
    return (
        <>
            <Header
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
            <Nav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
                <main
                    className="site-main">
                    {children}
                </main>
            <Footer/>
        </>
    )
}
import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <footer
            className="site-footer">
            <div
                className="container">
                <legend
                    className="footer-legend">
                    © {new Date().getFullYear()} Francisco De Los Santos. All Rights Reserved.
                </legend>
            </div>
        </footer>
    )
}
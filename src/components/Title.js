import React from 'react'

import './Title.css'

export default function Title({ children }) {
    return (
        <div
            className="site-title">
            <h1>
                {children}
            </h1>
        </div>
    )
}
import React from 'react'

import './Card.css'

export default function Card({ image, title, subtitle }) {
    return (
        <div
            className="card">
            <img
                className="card-img"
                src={image.source}
                alt={image.alt}
            />
            <div
                className="card-text">
                <h2
                    className="card-title">
                    {title}
                </h2>
                <h3
                    className="card-subtitle">
                    {subtitle}
                </h3>
            </div>
        </div>
    )
}
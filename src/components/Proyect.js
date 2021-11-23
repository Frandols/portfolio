import React, { useState } from 'react'

import './Proyect.css'

export default function Proyect({
    images, 
    description, 
    links
}) {
    const [index, setIndex] = useState(0)
    return (
        <div
            className="proyect">
            <div
                className="proyect-slider">
                <img
                    className="proyect-img"
                    src={images[index].source}
                    alt={images[index].alt}
                />
                <div
                    className="proyect-controls">
                    <button
                        className="proyect-control"
                        onClick={
                            () => setIndex(images[index - 1] ? index - 1 : images.length - 1)
                        }>
                        <i 
                            className="fas fa-2x fa-chevron-left">
                        </i>
                    </button>
                    <button
                        className="proyect-control"
                        onClick={
                            () => setIndex(images[index + 1] ? index + 1 : 0)
                        }>
                        <i 
                            className="fas fa-2x fa-chevron-right">
                        </i>
                    </button>
                </div>
            </div>
            <p
                className="proyect-description">
                {description}
            </p>
            <div
                className="proyect-buttons">
                <button
                    className="proyect-button">
                    <a
                        className="proyect-link"
                        href={links.source}
                        target="_blank"
                        rel="noreferrer">
                        Source 
                    </a>
                    <i 
                        className="fab fa-github">    
                    </i>
                </button>
                <button
                    className="proyect-button">
                    <a
                        className="proyect-link"
                        href={links.production}
                        target="_blank"
                        rel="noreferrer">
                        Proyect 
                    </a>
                    <i 
                        className="fas fa-sign-out-alt">
                    </i>
                </button>
            </div>
        </div>
    )
}
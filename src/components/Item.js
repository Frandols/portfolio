import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

export default function Item({ id, name, image, legend }) {
    return (
        <Link
            className={`${name}-item`}
            to={`/portfolio/${id}`}>
            <img
                className={`${name}-item-img`}
                src={image.source}
                alt={image.alt}
            />
            <legend
                className={`${name}-item-legend`}>
                {legend}
            </legend>
        </Link>
    )
}
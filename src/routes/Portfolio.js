import React, { useEffect } from 'react'

import Title from '../components/Title'
import Items from '../components/Items'

import { portfolio } from '../data/data.json'

export default function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio | Francisco De Los Santos'
    }, [])
    return (
        <div
            className="container animate__animated animate__fadeIn">
            <Title>
                Portfolio
            </Title>
            <Items 
                {...portfolio.items} 
            />
        </div>
    )
}
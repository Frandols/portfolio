import React from 'react'
import { useParams } from 'react-router-dom'

import Proyect from '../components/Proyect'
import Title from '../components/Title'

import { portfolio } from '../data/data.json' 

export default function ProyectSection() {
    const { proyects } = portfolio
    const { proyect } = useParams()

    try {
        const { 
            title, 
            images, 
            description, 
            links 
        } = proyects[Number(proyect)]

        document.title = `${title} | Francisco De Los Santos`
    
        return (
            <div className="container animate__animated animate__fadeIn">
                <Title>
                    {title}
                </Title>
                <Proyect
                    images={images}
                    description={description}
                    links={links}
                />
            </div>
        )
    } catch (error) {
        return (
            <div className="container animate__animated animate__fadeIn">
                <Title>
                    Proyect not found!
                </Title>
            </div>
        )
    }
}
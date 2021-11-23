import React, { useEffect } from 'react'

import Card from '../components/Card'
import Title from '../components/Title'
import Board from '../components/Board'

import { home } from '../data/data.json'

export default function Home() {
    useEffect(() => {
        document.title = 'Home | Francisco De Los Santos'
    }, [])
    return (
        <div
            className="container animate__animated animate__fadeIn">
            <Card
                {...home.card}    
            />
            <Title>
                Technologies
            </Title>
            <Board
                {...home.board}
            />
        </div>
    )
}
import React, { useEffect } from 'react'

import Title from '../components/Title'
import Form from '../components/Form'

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact | Francisco De Los Santos'
    }, [])
    return (
        <div
            className="container animate__animated animate__fadeIn">
            <Title>
                Contact me
            </Title>
            <Form/>
        </div>
    )
}
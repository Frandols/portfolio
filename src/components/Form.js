import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import emailjs from 'emailjs-com'

import './Form.css'

import TextField from './TextField'

const {
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID 
} = process.env

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState(null)

    const handleSubmit = async (
        values, 
        { resetForm }) => {
        const { status } = await emailjs.send(
            REACT_APP_SERVICE_ID, 
            REACT_APP_TEMPLATE_ID, 
            values, 
            REACT_APP_USER_ID
        )

        setFormStatus(status)

        if(status !== 200) return null

        resetForm()
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={
                object({
                    name: string()
                    .required('Name required.'),
                    email: string()
                    .required('Email required.')
                    .email('Email adress not valid.'),
                    message: string()
                    .required('Mesage is required.')
                    .min(10, 'Message must have at least 10 characters.')
                })
            }
        >
            <Form
                className="contact-form"
            >
                <TextField
                    name="name"
                    placeholder="Name..."
                />
                <TextField
                    name="email"
                    placeholder="Email..."
                />
                <TextField
                    type="textarea"
                    name="message"
                    placeholder="Message..."
                    rows="3"
                />
                <button
                    className={`form-btn ${formStatus && formStatus !== 200 ? 'form-btn-error' : ''}`}
                    type="submit">
                    {
                        formStatus && formStatus !== 200 
                        ? 'Error! Try later...'
                        : 'Send'
                    }
                </button>
            </Form>
        </Formik>
    )
}
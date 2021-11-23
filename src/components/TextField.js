import React from 'react'
import { useField } from 'formik'

import './TextField.css'

export default function TextField({ 
    type="input", 
    ...props 
}){
    const [field, meta] = useField(props)
    return (
        <div
            className="control">
            {
                type === 'input'
                ? (
                    <input
                        className="form-input"
                        autoComplete="off"
                        {...field}
                        {...props}
                    />
                ) : (
                    <textarea
                        className="form-textarea"
                        {...field}
                        {...props}
                    />
                )
            }
            {
                meta.touched && meta.error
                ? (
                    <p
                        className="control-error">
                        {meta.error}
                    </p>
                ) : null
            }
        </div>        
    )
}
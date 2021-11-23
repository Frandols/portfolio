import React from 'react'

import './Items.css'

import Item from './Item'

export default function Items({ name, title, data, ...props }) {
    return (
        <div
            className={name}
            {...props}>
            {
                data.map(
                    item => (
                        <Item
                            key={item.id}
                            name={name}
                            {...item}
                        />
                    )
                )
            }
        </div>
    )
}
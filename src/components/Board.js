import React from 'react'

import './Board.css'

export default function Board({ title, data }) {
    return (
        <div
            className="board">
            <ul
                className="board-list">
                {
                    data.map(
                        item => (
                            <li
                                className="board-item"
                                key={item.id}>
                                {item.label}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}
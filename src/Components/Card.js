import React from 'react'

import '../App.css'

function Card() {
    return (
        <div className="flex-container-row card">
            <h1>{props.problem}</h1>
        </div>
    )
}

export default Card
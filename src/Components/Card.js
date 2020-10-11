import React from 'react'

import '../App.css'

function Card(props) {
    return (
        <div className="flex-container-row card">
            <h1>{props.problem.problem}</h1>
        </div>
    )
}

export default Card
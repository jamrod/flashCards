import React from 'react'

import '../App.css'

function Card(props) {
    return (
        <div className="flex-container-row centered">
            <div className="card" id={props.color} >
                <h1>{props.problem.problem}</h1>
                {props.show ? <h1>{props.problem.answer}</h1> : null}
            </div>
        </div>
    )
}

export default Card
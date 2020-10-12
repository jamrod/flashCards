import React from 'react'

import '../App.css'

function Response(props) {
    return (
        <div className="centered">
            <span id="response">{props.text}</span>
        </div>
    )
}

export default Response
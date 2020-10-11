import React from 'react'

import '../App.css'

function Response(props) {
    return (
        <div className="flex-container-row">
            <span id="response">{props.text}</span>
        </div>
    )
}

export default Response
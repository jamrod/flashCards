import React from 'react'

import '../App.css'

function Response(props) {
    return (
        <div className="centered flex-container-column" id="response">
            <p>{props.text}</p>
            <div id="scoreboard" className="flex-container-row">
                <span>Score</span>
                <span id="right">Right: {props.score.right}</span>
                <span id="wrong">Missed: {props.score.wrong}</span>
            </div>

        </div>
    )
}

export default Response
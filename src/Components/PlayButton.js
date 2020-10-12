import React from 'react'

import '../App.css'

function PlayButton(props) {
    return (
        <div className="centered">
            <button onClick={props.play}>Play!</button>
        </div>
    )
}

export default PlayButton
import React from 'react'

import '../App.css'

function Description(props) {
    return (
        <div className="flex-container-column description centered">
            <p>This is a flash cards app for practicing basic math.</p>
            {props.playing ? null : <p>Choose a problem set to start.</p>}
        </div>
    )
}

export default Description
import React from 'react'

import '../App.css'

function Description(props) {
    return (
        <div className="flex-container-column description centered">
            <p>This is a flash cards app for practicing the times tables from 1x1 to 12x12</p>
            {props.playing ? null : <p>Click "Play!" to start.</p>}
        </div>
    )
}

export default Description
import React from 'react'

import '../App.css'

function ResetButton(props) {
    return (
        <div className="centered flex-container-row">
            <button id="reset" onClick={() => { props.reset() }}>Reset</button>

        </div>
    )
}

export default ResetButton
import React from 'react'

import '../App.css'

function PlayButtons(props) {
    return (
        <div className="flex-container-row space-between">
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('addition') }}>Addition to 20</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('addition100') }}>Addition to 100</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('subtraction') }}>Subtraction to 20</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('subtraction100') }}>Subtraction to 200</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('times') }}>Basic Multiplication</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('division') }}>Basic Division</button></div>
            <div className="button-container"><button className="play-buttons" onClick={() => { props.setProblems('clock') }}>Analog Clock</button></div>
        </div>
    )
}

export default PlayButtons
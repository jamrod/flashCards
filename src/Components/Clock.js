import React from 'react'
import ClockImage from './ClockImage'
import '../App.css'
import { getTimeText } from './Helpers/getTimeText'

function Clock(props) {
    const root = document.documentElement
    const minute = parseInt(props.problem.problem[1]) * 6
    root.style.setProperty('--minute', `${minute}deg`)
    const hour = (parseInt(props.problem.problem[0]) * 30) + (minute / 12)
    root.style.setProperty('--hour', `${hour}deg`)
    const answerText = getTimeText(props.problem.problem)

    function showAnswer(bool) {
        if (bool) {
            return (
                <>
                    <h2>{props.problem.answer}</h2>
                    <h2>{answerText}</h2>
                </>
            )
        }
    }

    return (
        <div className="flex-container-column centered">
            <div className="clock" id={props.color}>
                <ClockImage />
                <div id="hour"><div id="inner-hour"></div></div>
                <div id="minute"><div id="inner-minute"></div></div>
            </div>
            <div className="answer flex-container-row">{showAnswer(props.show)}</div>
        </div>
    )
}

export default Clock
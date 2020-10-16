import React from 'react'

import '../App.css'

function Footer() {
    return (
        <div className="flex-container-row footer">
            <span>&hearts; &copy; 2020</span>
            <img alt="JR" className="icons" src="/JRsymbol.png" />
            <span><a href="https://jamescrodgers.com/" target="blank">JCR</a> &hearts;</span>
        </div>
    )
}

export default Footer
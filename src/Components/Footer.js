import React from 'react'

import '../App.css'

function Footer() {
    return (
        <div className="flex-container-row footer">
            <div>
                <span>&hearts; &copy; 2020</span>
                <img alt="JR" className="icons" src="/JRsymbol.png" />
                <span>JCR &hearts;</span>
            </div>
        </div>
    )
}

export default Footer
import React, { Component } from 'react'

import '../App.css'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    getInput = str => {
        this.setState({
            input: str
        })
    }

    clear = () => {
        document.querySelector('#input').value = ''
        this.setState({ input: '' })
    }


    render() {
        return (
            <div className="centered">
                <input
                    ref={(ip) => { this.answer = ip }}
                    type="text"
                    id="input"
                    onChange={e => {
                        this.getInput(e.target.value);
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            this.props.check(this.state.input)
                            this.clear()
                        }
                    }}
                ></input>
            </div>
        )
    }
}

export default Input
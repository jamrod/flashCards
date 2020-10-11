import React, { Component } from 'react'

import '../App.css'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    componentDidUpdate = newProps => {
        if (this.props.show) {
            this.input.focus()
        }
    }

    getInput = str => {
        this.setState({
            input: str
        })
    }

    render() {
        return (
            <div className="flex-container-row">
                <input
                    ref={(input) => { this.input = input }}
                    type="text"
                    placeholder="Type your answer here"
                    onChange={e => {
                        this.getInput(e.target.value);
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') { this.props.check(this.state.input) }
                    }}
                ></input>
            </div>
        )
    }
}

export default Input
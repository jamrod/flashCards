import React from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Description from './Components/Description'
import PlayButton from './Components/PlayButton'
import Input from './Components/Input'
import Response from './Components/Response'


class App extends Component {
  constructor(props) {
    this.state = {
      playing: false,
      problems: this.createTimesTable(),
      current: {},
      input: ''
    }

  }
  createTimesTable = () => {
    let problems = []
    let a = 1
    for (i = 1; i < 13; i++) {
      for (a = 1; a < 13; a++) {
        problems.push({
          "problem": `${a} x ${i}`,
          "answer": a * i
        })
      }
    }
    return problems
  }

  getProblem = () => {
    let n = Math.floor(Math.random() * Math.floor(this.state.problems.length()));
    return this.state.problems[n]
  }

  play = () => {
    this.setState({
      playing: true
    })
  }



  render() {
    return (
      <div className="app">
        <Header></Header>
        <Description></Description>
        {this.state.playing ? <Card></Card> : <PlayButton play={this.props.play()}></PlayButton>}
        {this.state.playing ? <Input></Input> : null}
        {this.state.playing ? <Response></Response> : null}
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

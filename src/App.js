import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Description from './Components/Description'
import PlayButton from './Components/PlayButton'
import Input from './Components/Input'
import Response from './Components/Response'
import Card from './Components/Card'
import { createTimesTable } from './getProblems.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      problems: createTimesTable(),
      current: { problem: null, answer: null },
      response: "Hit 'enter' to check answer",
      showAnswer: false,
      color: 'white'
    }

  }

  getProblem = () => {
    let n = Math.floor(Math.random() * Math.floor(this.state.problems.length))
    return this.state.problems[n]
  }

  play = () => {
    let current = this.getProblem()
    this.setState({
      playing: true,
      current: current
    })
  }

  checkAnswer = str => {
    this.setState({
      input: str,
      showAnswer: true
    })
    if (parseInt(str) === this.state.current.answer) {
      this.setState({
        response: "You got it",
        color: 'green'
      })
    } else {
      this.setState({
        response: "Sorry, that's not it",
        color: 'red'
      })
    }
    setTimeout(this.cycleProblem, 3000)
  }

  cycleProblem = () => {
    let newProb = this.getProblem()
    this.setState({
      current: newProb,
      input: '',
      response: "Hit 'enter' to check answer",
      showAnswer: false,
      color: 'white'
    })
  }



  render() {
    return (
      <div className="App">
        <div className="flex-container-column container">
          <Header></Header>
          <div className="inner-container">
            <Description playing={this.state.playing}></Description>
            {this.state.playing ? <Card problem={this.state.current} show={this.state.showAnswer} color={this.state.color}></Card> : <PlayButton play={this.play}></PlayButton>}
            {this.state.playing ? <Input check={this.checkAnswer}></Input> : null}
            {this.state.playing ? <Response text={this.state.response}></Response> : null}
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

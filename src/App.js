import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Description from './Components/Description'
import PlayButtons from './Components/PlayButtons'
import Input from './Components/Input'
import Response from './Components/Response'
import Card from './Components/Card'
import { getProblemsTable } from './Components/Helpers/getProblems.js'
import ResetButton from './Components/ResetButton'
import Clock from './Components/Clock'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      problems: [],
      current: { problem: 0, answer: 0 },
      response: "Hit 'enter' to check answer",
      showAnswer: false,
      color: 'white',
      clock: false,
      score: {
        right: 0, wrong: 0
      }
    }

  }

  setProblems = (str) => {
    let c
    str === 'clock' ? c = true : c = false
    let problems = getProblemsTable(str)
    this.setState({
      problems: problems,
      clock: c
    })
    setTimeout(this.play, 500)
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
    this.child.answer.focus()
  }

  checkAnswer = str => {
    let correct = false
    if (this.state.clock) {
      if (str === this.state.current.answer) {
        correct = true
      }
    } else {
      if (parseInt(str) === this.state.current.answer) {
        correct = true
      }
    }
    if (correct) {
      this.setState(prev => ({
        response: "You got it",
        color: 'green',
        score: { right: prev.score.right + 1, wrong: prev.score.wrong },
        showAnswer: true
      }))
    } else {
      this.setState(prev => ({
        response: "Sorry, that's not it",
        color: 'red',
        score: { right: prev.score.right, wrong: prev.score.wrong + 1 },
        showAnswer: true
      }))
    }
    setTimeout(this.cycleProblem, 3000)
  }

  cycleProblem = () => {
    let newProb = this.getProblem()
    let bool = true
    while (bool) {
      if (newProb !== this.state.current) {
        this.setState({
          current: newProb,
          input: '',
          response: "Hit 'enter' to check answer",
          showAnswer: false,
          color: 'white'
        })
        bool = false
      } else {
        newProb = this.getProblem()
      }
    }
  }

  resetGame = () => {
    this.setState({
      playing: false,
      problems: [],
      current: { problem: 0, answer: 0 },
      response: "Hit 'enter' to check answer",
      showAnswer: false,
      color: 'white',
      clock: false,
      score: {
        right: 0, wrong: 0
      }
    })
  }


  render() {
    return (
      <div className="App">
        <div className="flex-container-column container">
          <Header></Header>
          <div className="inner-container">
            <Description playing={this.state.playing}></Description>
            <PlayButtons setProblems={this.setProblems}></PlayButtons>
            {this.state.playing && !this.state.clock ? <Card problem={this.state.current} show={this.state.showAnswer} color={this.state.color}></Card> : null}
            {this.state.playing && this.state.clock ? <Clock problem={this.state.current} show={this.state.showAnswer} color={this.state.color}></Clock> : null}
            {this.state.playing ? <Input ref={ch => this.child = ch} check={this.checkAnswer}></Input> : null}
            {this.state.playing ? <Response text={this.state.response} score={this.state.score}></Response> : null}
            {this.state.playing ? <ResetButton reset={this.resetGame}></ResetButton> : null}
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

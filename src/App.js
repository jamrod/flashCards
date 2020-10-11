import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Description from './Components/Description'
import PlayButton from './Components/PlayButton'
import Input from './Components/Input'
import Response from './Components/Response'
import Card from './Components/Card'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      problems: this.createTimesTable(),
      current: { problem: null, answer: null },
      input: '',
      response: "Hit 'enter' to check answer"
    }

  }
  createTimesTable = () => {
    let problems = []
    for (let i = 1; i < 13; i++) {
      for (let a = 1; a < 13; a++) {
        problems.push({
          "problem": `${a} x ${i}`,
          "answer": a * i
        })
      }
    }
    return problems
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
    this.setState({ input: str })
    console.log(str)
    console.log(this.state.current)
    if (parseInt(str) === this.state.current.answer) {

      this.setState({
        response: "You got it"
      })
    }
  }



  render() {
    return (
      <div className="app">
        <Header></Header>
        <Description></Description>
        {this.state.playing ? <Card problem={this.state.current}></Card> : <PlayButton play={this.play}></PlayButton>}
        {this.state.playing ? <Input check={this.checkAnswer}></Input> : null}
        {this.state.playing ? <Response text={this.state.response}></Response> : null}
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

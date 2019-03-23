
import React, { Component } from 'react'
import Dice from './Dice'
import Button from '@material-ui/core/Button';




export default class DiceContainer extends Component {

  state = {
    counter: 0,
    randomNumbers: [],
    keptNumbers: [],
    backgroundcolor: 'blue'
  }

  keepDice = (props) => {
    this.setState({keptNumbers: [this.state.keptNumbers.push(props)]})

  }

  RemoveDice = (props) => {
    this.state.keepNumbers.shift(props)
  }

  returnRandomNumbers = () => {
    return Array.from({length: (5 - this.state.keptNumbers.length)}, () => Math.floor(Math.random() * 6) + 1)
  }

  roundOne = () => {
    this.setState({randomNumbers: this.returnRandomNumbers(), counter: this.state.counter+1})
  }


  roundNumber = () => {
    if(this.state.counter === 0) {
      return "First round"
    } else if (this.state.counter === 1) {
      return "Second round"}
    else if(this.state.counter === 2) {
      return "Third round"
    } else if(this.state.counter > 3) {
      this.setState({randomNumbers: this.returnRandomNumbers(), keepNumbers: [], counter: 0})
      return "New game"
    }
  }

  imageDice = (randomNumber) => {
    switch(randomNumber) {
      case 1:
        return "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png"
      case 2:
        return "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png"
      case 3:
        return "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png"
      case 4:
        return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png"
      case 5:
        return "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png"
      case 6:
        return "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"
      default:
        return console.log("error")
    }
  }

  render() {
    console.log(this.state.keptNumbers)
    return (
      <div>
        <div>
          Kept:
          {this.state.keptNumbers.map(keptNumber => <Dice number={keptNumber} keepDice={this.RemoveDice} backgroundcolor={this.state.backgroundcolor} imageDice={this.imageDice}/>)}
        </div>
        <br />
        <div style={{display: 'inline-block'}}>
          In the game:
          {this.state.randomNumbers.map(randomNumber => <Dice number={randomNumber} keepDice={this.keepDice} imageDice={this.imageDice} backgroundcolor={this.state.backgroundcolor} />)}
          <Button  onClick={()=> {this.roundOne()}}variant="contained" color="primary">
          {this.roundNumber()}
          </Button>
        </div>
      </div>
    )
  }
}


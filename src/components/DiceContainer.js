
import React, { Component } from 'react'
import Dice from './Dice'
import Button from '@material-ui/core/Button';




export default class DiceContainer extends Component {

  state = {
    counter: 1,
    randomNumbers: [],
    keepNumbers: []
  }

  keepDice = (props) => {
    this.state.keepNumbers.push(props)
  }

  RemoveDice = (props) => {
    this.state.keepNumbers.shift(props)
  }

  returnRandomNumbers = () => {
    return Array.from({length: (5 - this.state.keepNumbers.length)}, () => Math.floor(Math.random() * 6) + 1)
  }

  roundOne = () => {
    this.setState({randomNumbers: this.returnRandomNumbers(), counter: this.state.counter+1})
    console.log(this.state.counter)
  }

  roundNumber = () => {
    if(this.state.counter === 1) {
      return "First round"
    } else if (this.state.counter === 2) {
      return "Second round"}
    else if(this.state.counter === 3) {
      return "Third round"
    } else if(this.state.counter > 3) {
      this.setState({randomNumbers: this.returnRandomNumbers(), counter: 1})
    }
  }

  render() {
    return (
      <div>
        <div>
          Kept:
          {this.state.keepNumbers.map(keepNumbers => <Dice number={keepNumbers} keepDice={this.RemoveDice}/>)}
        </div>
        <div>
          In the game:
          {this.state.randomNumbers.map(randomNumber => <Dice number={randomNumber} keepDice={this.keepDice} />)}
          <Button  onClick={()=> {this.roundOne()}}variant="contained" color="primary">
          {this.roundNumber()}
          </Button>
        </div>
      </div>
    )
  }
}


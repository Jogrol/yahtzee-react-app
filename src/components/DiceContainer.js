
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dice from './Dice'

import Button from '@material-ui/core/Button';




export default class DiceContainer extends Component {

  state = {
    counter: 0,
    newRandomNumber: [{1:0},{2:0}],
    randomNumbers: [0,0,0,0,0],
    keepNumbers: []
  }

  static propTypes = {
    prop: PropTypes
  }

  keepDice = (props) => {
    this.state.keepNumbers.push(props)
    console.log(this.state.keepNumbers)
  }

  returnRandomNumbers = () => {
    return Array.from({length: (5 - this.state.keepNumbers.length)}, () => Math.floor(Math.random() * 6) + 1)
  }

  roundOne = () => {
    this.setState({randomNumbers: this.returnRandomNumbers(), counter: +1})

  }

  roundTwo = () => {
    let updateNumbers = this.state.keepNumbers.concat(this.returnRandomNumbers())
    console.log(updateNumbers)
    this.setState({randomNumbers: updateNumbers, counter: +1})
  }



  render() {
    return (
      <div>
      <div>
        {this.state.randomNumbers.map(randomNumber => <Dice randomNumber={randomNumber} keepDice={this.keepDice} />)}
        <Button  onClick={()=> {this.roundOne()}}variant="contained" color="primary">
        First round!
      </Button>
      <Button  onClick={()=> {this.roundTwo()}}variant="contained" color="primary">
        Second round!
      </Button>
      </div>
      <div>
      {/* {this.state.newRandomNumber.map(randomNumber => <Dice randomNumber={randomNumber} keepDice={this.keepDice} />)} */}
      </div>
      </div>
    )
  }
}


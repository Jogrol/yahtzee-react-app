
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dice from './Dice'

import Button from '@material-ui/core/Button';




export default class DiceContainer extends Component {

  state = {
    randomNumbers: [0,0,0,0,0],
    keepNumber: [0]
  }

  static propTypes = {
    prop: PropTypes
  }

  keepDice = (props) => {
    console.log('keep', props)
  }

  shakeDice = () => {
    let randomNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1)
    this.setState({randomNumbers: randomNumbers})
    
  }


  render() {
    return (
      <div>
        {this.state.randomNumbers.map(randomNumber => <Dice randomNumber={randomNumber} keepDice={this.keepDice} />)}
        <Button  onClick={()=> {this.shakeDice()}}variant="contained" color="primary">
        Through the dices!
      </Button>
      </div>
    )
  }
}


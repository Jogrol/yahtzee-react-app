
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dice from './Dice'

import Button from '@material-ui/core/Button';




export default class DiceContainer extends Component {

  state = {
    randomNumbers: [0,0,0,0,0]
  }

  static propTypes = {
    prop: PropTypes
  }


  shakeDice = () => {
    let randomNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1)
    this.setState({randomNumbers: randomNumbers})
  }


  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <div>
        <Dice randomNumber={Number(this.state.randomNumbers[0])} />
        <Dice randomNumber={this.state.randomNumbers[1]} />
        <Dice randomNumber={this.state.randomNumbers[2]} />
        <Dice randomNumber={this.state.randomNumbers[3]} />
        <Dice randomNumber={this.state.randomNumbers[4]} />
        <Button  onClick={()=> {this.shakeDice()}}variant="contained" color="primary">
        Through the dices!
      </Button>
      </div>
    )
  }
}


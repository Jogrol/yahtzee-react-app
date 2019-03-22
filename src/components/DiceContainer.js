
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dice from './Dice'

export default class DiceContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>
    )
  }
}


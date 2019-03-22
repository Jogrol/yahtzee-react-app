import React from 'react'
import Button from '@material-ui/core/Button';


export function Dice(props) {
    if (props.randomNumber === 0 ) return <div>Give it a try!</div>
    return (
      <div>
        {props.randomNumber}
        <Button onClick={() => props.keepDice(props.randomNumber)}>Keep</Button>
      </div>
 
    )
  }

export default Dice

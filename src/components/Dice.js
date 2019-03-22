import React from 'react'
import Button from '@material-ui/core/Button';


export function Dice(props) {
    if (props.number === 0 ) return <div>Give it a try!</div>
    return (
      <div>
        {props.number}
        <Button onClick={() => props.keepDice(props.number)}>Keep</Button>
      </div>
 
    )
  }

export default Dice

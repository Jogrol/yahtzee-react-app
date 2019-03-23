import React from 'react'
import Button from '@material-ui/core/Button';


export function Dice(props) {
    console.log(props.backgroundcolor)
    if (props.number === 0 ) return <div>Give it a try!</div>

    return (
      <div style={{
          backgroundColor: props.backgroundcolor
      }}>
        <Button onClick={() => props.keepDice(props.number)}> <img src={props.imageDice(props.number)} alt={props.number} /></Button>
      </div>
 
    )
  }

export default Dice

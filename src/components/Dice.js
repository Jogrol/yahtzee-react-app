import React from 'react'


export function Dice(props) {

    if (props.randomNumber === 0 ) return <div>Give it a try!</div>
    return (
      <div>
        {props.randomNumber}
      </div>
    )
  }

export default Dice

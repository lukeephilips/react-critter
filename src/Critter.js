import React from 'react'
function Critter(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Hunger: {props.hunger}</p>
      <p>Energy: {props.energy}</p>
    </div>
  )
}

export default Critter;

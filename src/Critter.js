import React from 'react'
function Critter(props) {
  function handleFeed(){
    props.feedCritter(props.id, "feed");
  }
  function handleRest(){
    props.feedCritter(props.id, "rest");
  }
  function dedYet() {
    if (props.energy > 0) {
      return(
        <div>
          <p>Age: {Math.round(props.age)}</p>
          <p onClick={handleFeed} >Hunger: {props.hunger}</p>
          <p onClick={handleRest} >Energy: {props.energy}</p>
        </div>
      )
    } else {
      return(
        <p>He ded.</p>
      )
    }
  }
  return (
    <div>
      <h3>{props.name}</h3>
      {dedYet()}
    </div>
  )
}

export default Critter;

import React from 'react'
import Critter from './Critter'
function CritterList(props) {
  return (
    <div>
      {props.masterCritterList.map((critter,i) =>
        <Critter name={critter.name} age={critter.age} hunger={critter.hunger} energy={critter.energy} key={i}
        feedCritter={props.feedCritter} avatar={critter.avatar} id={i}/>
      )}
    </div>
  )
}

export default CritterList;

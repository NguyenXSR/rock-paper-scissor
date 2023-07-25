import React from 'react'
import ChoiceCard from './ChoiceCard'

function Choice({gameItems, handleGameItem}) {
  return (
    <div>
    <h2 className='choices-title'>Choose Your Weapon</h2>
    <div className='choice'>
        {gameItems.map((gameItem) => (
            <ChoiceCard 
            gameItem={gameItem}
            handleGameItem={handleGameItem}
            key={gameItem.id}/>
        ))}
    </div>
    </div>
  )
}

export default Choice